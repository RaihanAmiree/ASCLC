import { useRef, useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

function ImageScrollHero({
  enableAnimations = true,
  className = "",
  startScale = 0.25,
  src, // Image source
}) {
  const containerRef = useRef(null);
  const shouldReduceMotion = useReducedMotion();
  const [scrollScale, setScrollScale] = useState(startScale);

  useEffect(() => {
    if (!enableAnimations || shouldReduceMotion) return;

    const handleScroll = () => {
      if (!containerRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      const containerHeight = containerRef.current.offsetHeight;
      const windowHeight = window.innerHeight;

      const scrolled = Math.max(0, -rect.top);
      const maxScroll = containerHeight - windowHeight;
      const progress = Math.min(scrolled / maxScroll, 1);

      const newScale = startScale + progress * (1 - startScale);
      setScrollScale(newScale);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [enableAnimations, shouldReduceMotion, startScale]);

  const shouldAnimate = enableAnimations && !shouldReduceMotion;

  return (
    <div className={`relative ${className}`}>
      <div ref={containerRef} className="relative" style={{ height: "200vh" }}>
        <div
          className="sticky top-0 w-full flex items-center justify-center z-10"
          style={{ height: "100vh" }}
        >
          <div
            className="relative flex items-center justify-center"
            style={{
              transform: shouldAnimate ? `scale(${scrollScale})` : "scale(1)",
              transformOrigin: "center center",
              willChange: "transform",
              transition: "none",
            }}
          >
            <img
              src={src}
              alt="Scroll Hero"
              loading="lazy"
              className="object-cover shadow-2xl rounded-2xl"
              style={{
                width: "80vw",
                maxWidth: "56rem",
                height: "60vh",
                objectFit: "cover",
              }}
            />

            {/* Overlay with motion text */}
            <motion.div
              className="absolute inset-0 flex items-center justify-center rounded-2xl"
              style={{
                backgroundColor: "rgba(0, 0, 0, 0.2)",
                backdropFilter: "blur(1px)",
              }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              <div className="text-center text-white">
                <motion.h1
                  className="text-2xl md:text-4xl lg:text-6xl font-bold mb-4"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: 0.8,
                    duration: 0.8,
                    type: "spring",
                    stiffness: 200,
                    damping: 25,
                  }}
                >
                  {/* Optional Heading */}
                </motion.h1>
                <motion.p
                  className="text-sm md:text-lg lg:text-xl max-w-2xl px-4"
                  style={{ color: "rgba(255, 255, 255, 0.8)" }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: 1.0,
                    duration: 0.8,
                    type: "spring",
                    stiffness: 200,
                    damping: 25,
                  }}
                >
                  {/* Optional Subtext */}
                </motion.p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ImageScrollHero;
