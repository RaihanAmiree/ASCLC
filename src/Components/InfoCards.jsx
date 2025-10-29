import React from 'react'
import Amiree from '../assets/Amiree.jpg'

const InfoCards = ({name, rank, grade , roll, img}) => {
  return (
    <div>
      <div className="mx-auto bg-[#000435] w-[clamp(250px,80%,400px)] rounded-xl mb-[clamp(1rem,4vw,5rem)] pb-[clamp(0.5rem,2vw,1.25rem)] shadow-lg transition-transform duration-300 hover:scale-[1.02]">
        <div>
          <img
            src={img}
            alt="Raihan Ahmed Amiree"
            className="mx-auto rounded-t-xl object-cover w-full bg-center"
          />
        </div>
      
        <p className="text-white text-center text-[clamp(1.1rem,2.3vw,1.7rem)] mt-[clamp(0.5rem,2vw,1.25rem)] font-semibold">{name}</p>
      
        <p className="text-[#FFFFE0] text-center text-[clamp(1rem,2vw,1.3rem)] mt-[clamp(0.2rem,1vw,0.75rem)]">{rank}</p>
      
        <p className="text-white text-center text-[clamp(1rem,2vw,1.25rem)] mt-[clamp(0.5rem,2vw,1.5rem)]">{grade}</p>
      
        <p className="text-white text-center text-[clamp(1rem,2vw,1.25rem)]">{roll}</p>
      </div>
    </div>
  )
}

export default InfoCards
