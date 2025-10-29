import React from 'react'
import Amiree from '../assets/Amiree.jpg'
import Jabir from '../assets/Jabir.jpg'
import Miss from '../assets/SuraiyaMiss.jpg'

const President = () => {
  return (
    <div>
        <section className="w-[clamp(280px,90%,1200px)] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-[clamp(1rem,3vw,2rem)] justify-items-center">
  {/* Replace these with your InfoCard components */}
 <div className="mx-auto bg-[#000435] w-[clamp(250px,80%,400px)] rounded-xl mb-[clamp(1rem,4vw,5rem)] pb-[clamp(0.5rem,2vw,1.25rem)] shadow-lg transition-transform duration-300 hover:scale-[1.02]">
        <div>
          <img
            src={Jabir}
            alt="Raihan Ahmed Amiree"
            className="mx-auto rounded-t-xl object-cover w-full bg-center"
          />
        </div>
      
        <p className="text-white text-center text-[clamp(1.1rem,2.3vw,1.7rem)] mt-[clamp(0.5rem,2vw,1.25rem)] font-semibold">Syed Israk Jabir</p>
      
        <p className="text-[#FFFFE0] text-center text-[clamp(1rem,2vw,1.3rem)] mt-[clamp(0.2rem,1vw,0.75rem)]">President</p>
      
        <p className="text-white text-center text-[clamp(1rem,2vw,1.25rem)] mt-[clamp(0.5rem,2vw,1.5rem)]">IX EV-4</p>
      
        <p className="text-white text-center text-[clamp(1rem,2vw,1.25rem)]">Roll : 30</p>
      </div>
  <div className="mx-auto bg-[#000435] w-[clamp(250px,80%,400px)] rounded-xl mb-[clamp(1rem,4vw,5rem)] pb-[clamp(0.5rem,2vw,1.25rem)] shadow-lg transition-transform duration-300 hover:scale-[1.02]">
        <div>
          <img
            src={Miss}
            alt="Raihan Ahmed Amiree"
            className="mx-auto rounded-t-xl object-cover w-full bg-center"
          />
        </div>
      
        <p className="text-white text-center text-[clamp(1.1rem,2.3vw,1.7rem)] mt-[clamp(0.5rem,2vw,1.25rem)] font-semibold"> Aiman Ahmed</p>
      
        <p className="text-[#FFFFE0] text-center text-[clamp(1rem,2vw,1.3rem)] mt-[clamp(0.2rem,1vw,0.75rem)]">Vice President</p>
      
        <p className="text-white text-center text-[clamp(1rem,2vw,1.25rem)] mt-[clamp(0.5rem,2vw,1.5rem)]">IX EV-1</p>
      
        <p className="text-white text-center text-[clamp(1rem,2vw,1.25rem)]">Roll : 03</p>
      </div>
</section>
      
    </div>
  )
}

export default President
