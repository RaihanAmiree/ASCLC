import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Preloader from "./Components/Preloader";
import PageLoader from "./Components/PageLoader";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Services from "./Pages/Services";
import Explorer from "./Pages/Explorer";
import CVSelection from "./Components/CVSelection";
import CVDesign1 from "./Components/CVDesign1";
import CVDesign2 from "./Components/CVDesign2";
import CVDesign3 from "./Components/CVDesign3";
import CVDesign4 from "./Components/CVDesign4";
import CVDesign5 from "./Components/CVDesign5";
import CVDesign6 from "./Components/CVDesign6";
import PDFEntry from './Components/PDFEntry';
import CareerLibrary from './Components/CareerLibrary';
import Chatbot from "./Components/Chatbot";
import Motivation from "./Components/Motivation";
import Course from "./Components/Course";
import Registration from "./Components/Registration";
import ScrollToTop from "./Components/ScrollToTop";

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3000); // preloader duration
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* {loading && <Preloader duration={3000} />} */}
      {/* {!loading && ( */}
        <div>
          <Router>
            <ScrollToTop></ScrollToTop>
             <PageLoader duration={1000} />
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/explorer" element={<Explorer />} />
              <Route path="*" element={<Navigate to="/" replace />} />
              <Route path="/cv1" element={<CVDesign1 />} />
              <Route path="/librarydoor" element={<PDFEntry />} />
              <Route path="/library" element={<CareerLibrary />} />
              <Route path="/chatbot" element={<Chatbot />} />
              <Route path="/motivation" element={<Motivation />} />
              <Route path="/course" element={<Course />} />
              <Route path="/registration" element={<Registration />} />
            </Routes>
            <Footer />
          </Router>
        </div>
      {/* )} */}
    </>
  );
};

export default App;
