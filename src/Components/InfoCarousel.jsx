import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import InfoCardsCarousel from "./InfoCardsCarousel";
import Amiree from "../assets/Amiree.jpg";
import Auronno from "../assets/Auronno.jpg";
import Sabit from "../assets/Sabit.jpg";
import Anindya from "../assets/Anindya.jpg";
import Nashwan from "../assets/Nashwan.jpg";
import Ruwayd from "../assets/Ruwayd.jpg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function AutoPlay() {
  // 1. Use state to manage and track the current screen width for stability
  const [windowWidth, setWindowWidth] = useState(0); 

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 8000, 
    autoplaySpeed: 0.0000001, 
    cssEase: "linear",
    adaptiveHeight: true,
    centerMode: false,
    
    responsive: [
      {
        breakpoint: 1024,
        settings: { 
          slidesToShow: 2,
          centerMode: false,
        },
      },
      // 2. Simplified Mobile Breakpoint: Target everything below 1024px
      // by using the next most reliable breakpoint (640px)
      {
        breakpoint: 640, 
        settings: { 
          slidesToShow: 1, // Enforce single slide on small devices
          centerMode: false,
        },
      },
      // Note: Removed 768px breakpoint to prevent confusion and rely on 640px
    ],
  };

  /**
   * FIX: This useEffect now handles both the synthetic resize event AND 
   * listens for actual window resizes to update state, forcing a reliable rerender.
   */
  useEffect(() => {
    // Handler to update window width state
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      // Trigger synthetic event 
      window.dispatchEvent(new Event("resize"));
    };

    // Initial call after a delay to ensure correct mounting calculation
    const initialTimer = setTimeout(handleResize, 100);

    // Set up real event listener for runtime resizes
    window.addEventListener("resize", handleResize);

    return () => {
      clearTimeout(initialTimer);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const teamMembers = [
    { img: Amiree, name: "Raihan Amiree", rank: "Chief Advisor", grade: "IX EV-1", roll: "Roll : 01" },
    { img: Anindya, name: "Anindya Pramanik", rank: "Financial Secretary", grade: "IX EV-1", roll: "Roll : 02" },
    { img: Auronno, name: "Hasnain K Auronno", rank: "General Secretary", grade: "IX EV-1", roll: "Roll : 14" },
    { img: Sabit, name: "Sabit Showmik", rank: "Joint Secretary", grade: "IX EV-1", roll: "Roll : 06" },
    { img: Nashwan, name: "Hemadri Shekhar", rank: "Organizing secretary", grade: "IX EV-", roll: "Roll : 09" },
    { img: Ruwayd, name: "Wasifur Rahman", rank: "Administrative Secretary", grade: "IX EV-1", roll: "Roll : 07" },
  ];

  return (
    <div className="w-full px-4 sm:px-6 md:px-8 py-8">
      <div className="w-full max-w-[1200px] mx-auto">
        {/* Key prop ensures the slider remounts if the width changes unexpectedly, 
            which can resolve persistent calculation errors. */}
        <Slider key={windowWidth} {...settings}>
          {teamMembers.map((member, i) => (
            <div key={i} className="px-2">
              <InfoCardsCarousel {...member} />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default AutoPlay;