import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

const BgDark = ({ children, className }) => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => setInit(true));
  }, []);

  const particlesLoaded = (container) => {
    console.log(container);
  };

  const options = useMemo(() => ({
    background: { color: { value: "transparent" } }, // black background
    fpsLimit: 120,
    interactivity: { 
      events: { onClick: { enable: true, mode: "push" }, onHover: { enable: true, mode: "repulse" } },
      modes: { push: { quantity: 4 }, repulse: { distance: 200, duration: 0.4 } },
    },
    particles: {
      color: { value: "#8babb2ff" },
      links: { color: "#641db1ff", distance: 150, enable: true, opacity: 0.5, width: 1 },
      move: { enable: true, speed: 3, outModes: { default: "bounce" } },
      number: { value: 80, density: { enable: true } },
      opacity: { value: 0.5 },
      shape: { type: "circle" },
      size: { value: { min: 1, max: 5 } },
    },
    detectRetina: true,
    fullScreen: { enable: false }, // ❌ don't cover full screen
  }), []);

  return (
    <div className="relative w-full h-full ">
      {init && (
        <Particles
          id="tsparticle-dark"
          init={() => {}}
          particlesLoaded={particlesLoaded}
          options={options}
          className="absolute top-0 left-0 w-full h-full"
        />
      )}
      <div className="relative z-10">
        {children} {/* everything wrapped will go on top */}
      </div>
    </div>
  );
};

export default BgDark;
