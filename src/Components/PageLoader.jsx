// PageLoader.jsx
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const PageLoader = ({ duration = 1500 }) => {
  const location = useLocation();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Trigger loader on every route change
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), duration);
    return () => clearTimeout(timer);
  }, [location, duration]);

  if (!loading) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white bg-opacity-70 z-50">
      <dotlottie-wc
        src="https://lottie.host/9d057f96-3382-4839-a71d-12b970a1da3d/tVzANa1OeX.lottie"
        className='w-400 h-240'
        autoplay
        loop
      >
      </dotlottie-wc>
    </div>
  );
};

export default PageLoader;
