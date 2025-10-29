import React, { useState, useRef, useEffect } from "react";

// The secure way to access the API key in a React environment (Vite setup)
const API_KEY = import.meta.env.VITE_GEMINI_API_KEY;

const Chatbot = () => {
  // Using a stable model name. 
  const MODEL_NAME = "gemini-2.5-flash"; 
  
  // The API URL is clean, without the 'key' query parameter
  const API_URL = `https://generativelanguage.googleapis.com/v1beta/models/${MODEL_NAME}:generateContent`;

  const [chatHistory, setChatHistory] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [loading, setLoading] = useState(false);

  const messagesEndRef = useRef(null);

  // Scroll to bottom on new message
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(scrollToBottom, [chatHistory]);

  const extractSources = (candidate) => {
    let sources = [];
    const groundingMetadata = candidate?.groundingMetadata;
    if (groundingMetadata && groundingMetadata.groundingAttributions) {
      sources = groundingMetadata.groundingAttributions
        .map((attribution) => ({
          uri: attribution.web?.uri,
          title: attribution.web?.title,
        }))
        .filter((source) => source.uri && source.title);
    }
    return sources;
  };

  const callApiWithRetry = async (payload, maxRetries = 3) => {
    // 🛑 CRITICAL CHECK: Ensure the key is available
    if (!API_KEY) {
      throw new Error("API Key is missing. Check your .env.local file and restart the server.");
    }
    
    for (let i = 0; i < maxRetries; i++) {
      try {
        const response = await fetch(API_URL, {
          method: "POST",
          headers: { 
            "Content-Type": "application/json",
            // 🔑 CORRECT METHOD: Pass the API Key using the dedicated Google header
            "x-goog-api-key": API_KEY 
          },
          body: JSON.stringify(payload),
        });

        if (response.ok) {
          return await response.json();
        } else if (response.status === 429 && i < maxRetries - 1) {
          // Retry logic for rate-limiting
          const delay = Math.pow(2, i) * 1000;
          await new Promise((resolve) => setTimeout(resolve, delay));
          continue;
        } else {
          // Attempt to get a meaningful error message from the response body
          const errorBody = await response.text(); 
          throw new Error(`API returned status ${response.status}: ${response.statusText}. Response: ${errorBody.substring(0, 200)}...`);
        }
      } catch (error) {
        if (i === maxRetries - 1) {
          throw new Error(`Failed to connect to the AI service. Reason: ${error.message}`);
        }
        // Retry logic for connectivity issues
        const delay = Math.pow(2, i) * 1000;
        await new Promise((resolve) => setTimeout(resolve, delay));
      }
    }
  };

  const sendMessage = async () => {
    if (!inputValue.trim()) return;
    if (!API_KEY) {
        setChatHistory((prev) => [...prev, { role: "model", parts: [{ text: "Error: API Key is not configured. Please set it in your .env.local file." }] }]);
        return;
    }

    const userMessage = { role: "user", parts: [{ text: inputValue }] };
    setChatHistory((prev) => [...prev, userMessage]);
    setInputValue("");
    setLoading(true);

    try {
      const systemPrompt =
        "You are a helpful and friendly AI assistant. You answer questions directly and concisely. Use Google Search grounding when necessary to provide up-to-date information.";

      // 🟢 FIX APPLIED HERE: Map the chat history to the clean API format
      const apiContents = chatHistory.map(msg => ({
          role: msg.role,
          parts: msg.parts
      }));

      const payload = {
        // Use the cleaned history array (apiContents) along with the new user message
        contents: [...apiContents, userMessage],
        
        // Enable Google Search Tool
        tools: [{ google_search: {} }],

        // System Instruction
        systemInstruction: { parts: [{ text: systemPrompt }] },
        
        // CORRECTED STRUCTURE: Wrap temperature in generationConfig
        generationConfig: {
            temperature: 0.7, 
        },
      };

      const result = await callApiWithRetry(payload);

      const candidate = result.candidates?.[0];
      if (candidate && candidate.content?.parts?.[0]?.text) {
        const aiText = candidate.content.parts[0].text;
        const sources = extractSources(candidate);

        const aiMessage = { role: "model", parts: [{ text: aiText }], sources };
        setChatHistory((prev) => [...prev, aiMessage]);
      } else {
        const aiMessage = { role: "model", parts: [{ text: "Sorry, I received an invalid response or the content was blocked." }] };
        setChatHistory((prev) => [...prev, aiMessage]);
      }
    } catch (error) {
      const aiMessage = { role: "model", parts: [{ text: `Error: ${error.message}` }] };
      setChatHistory((prev) => [...prev, aiMessage]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="flex flex-col w-full max-w-3xl h-[90vh] bg-white rounded-xl shadow-lg overflow-hidden">
        {/* Header */}
        <header className="p-4 bg-gray-800 text-white flex items-center justify-between rounded-t-xl">
          <h1 className="text-xl font-bold">Gemini Assistant</h1>
          <span className="text-sm font-light opacity-80">Online</span>
        </header>

        {/* Messages */}
        <div className="flex-grow p-6 overflow-y-auto space-y-4">
          {chatHistory.length === 0 && (
            <div className="ai-message bg-gray-200 text-gray-800 p-3 rounded-xl max-w-[80%]">
              Hello! I am the Gemini Assistant. I can help you find information and answer your questions. Ask me anything to start!
            </div>
          )}
          {chatHistory.map((msg, idx) => (
            <div
              key={idx}
              className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
            >
              <div
                className={`message-box p-3 rounded-xl max-w-[80%] shadow-md ${
                  msg.role === "user"
                    ? "bg-blue-600 text-white rounded-br-sm"
                    : "bg-gray-200 text-gray-800 rounded-bl-sm"
                }`}
              >
                <p style={{whiteSpace: 'pre-wrap'}}>{msg.parts[0].text}</p>
                {msg.sources && msg.sources.length > 0 && (
                  <div className="mt-2 border-t border-gray-400 border-opacity-30 pt-2">
                    <p className="text-[10px] text-gray-600 mb-1">Sources:</p>
                    {msg.sources.map((source, i) => (
                      <a
                        key={i}
                        href={source.uri}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block mt-1 text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full hover:bg-blue-300 mr-1"
                      >
                        {source.title.substring(0, 40)}...
                      </a>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>

        {/* Input */}
        <div className="p-4 border-t border-gray-200">
          {loading && (
            <div className="flex items-center justify-center mb-2 text-sm text-gray-500">
              <div className="border-4 border-gray-200 border-t-4 border-t-blue-500 rounded-full w-6 h-6 animate-spin mr-2"></div>
              Thinking...
            </div>
          )}
          <div className="flex space-x-3">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
              placeholder="Ask me anything..."
              className="flex-grow p-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 transition duration-150"
              disabled={loading}
            />
            <button
              onClick={sendMessage}
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition duration-150 ease-in-out disabled:opacity-50"
              disabled={loading || inputValue.trim() === ""}
            >
              Send
            </button>
          </div>
        </div>
      </div>
      </div>
  );
};

export default Chatbot;