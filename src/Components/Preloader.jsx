import React, { useEffect, useState } from "react";

const Preloader = ({ duration = 500 }) => {
  const [visible, setVisible] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeOut(true); // start fade-out
      setTimeout(() => setVisible(false), 500); // remove after fade duration
    }, duration);

    return () => clearTimeout(timer);
  }, [duration]);

  if (!visible) return null;

  return (
    <div
      className={`fixed inset-0 flex items-center justify-center bg-black z-50 transition-opacity duration-500 ${
        fadeOut ? "opacity-0" : "opacity-100"
      }`}
    >
      <dotlottie-wc
        src="https://lottie.host/c7f1a136-f710-4713-b67f-98b7603102ef/gbbxfVPpAZ.lottie"
        autoplay
        loop
        style={{
          width: "500px",
          height: "500px",
          transform: fadeOut ? "scale(0.9)" : "scale(1)", // optional zoom-out
          transition: "transform 0.5s",
        }}
        className="bg-black"
      ></dotlottie-wc>
    </div>
  );
};

export default Preloader;
