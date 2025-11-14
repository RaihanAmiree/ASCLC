import React from 'react'
// Note: Amiree import is unused if the img prop is passed, but kept for context.
import Amiree from '../assets/Amiree.jpg' 

const InfoCardsCarousel = ({name, rank, grade , roll, img}) => {
  return (
    // Cleaned: Removed unnecessary outer <div>. 
    // Removed redundant mx-auto, w-full ensures it fills the slick-slide width.
    <div className="bg-[#000435] w-full rounded-xl 
                  mb-8 sm:mb-12 md:mb-16 
                  pb-4 sm:pb-6 
                  shadow-lg transition-transform duration-300 hover:scale-[1.02]
                  overflow-hidden" // Added overflow-hidden to contain image border-radius
    >
      <div className="aspect-w-16 aspect-h-9"> 
        <img
          src={img}
          // Improved: Using the dynamic prop for accessible alt text
          alt={`${name}, ${rank}`} 
          // Ensure image covers the available width of the card
          className="rounded-t-xl object-cover w-full h-full bg-center"
        />
      </div>
    
      {/* Text Size is highly responsive using clamp() (good practice) */}
      <p className="text-white text-center text-[clamp(1.1rem,2.3vw,1.7rem)] 
                    mt-4 font-semibold">
        {name}
      </p>
    
      <p className="text-[#FFFFE0] text-center text-[clamp(1rem,2vw,1.3rem)] 
                    mt-1 sm:mt-2">
        {rank}
      </p>
    
      <p className="text-white text-center text-[clamp(1rem,2vw,1.25rem)] 
                    mt-3 sm:mt-5">
        {grade}
      </p>
    
      <p className="text-white text-center text-[clamp(1rem,2vw,1.25rem)]">
        {roll}
      </p>
    </div>
  )
}

export default InfoCardsCarousel