import React from 'react';
import { motion } from 'framer-motion';
import BgImage from '../assets/HomeBG.jpg';
import Logo from '../assets/Logo.png';
import BgDark from './BgDark';
import { Link } from 'react-router-dom';

const HomeHero = ({ children }) => {

  // Heading animation variant
  const headingVariant = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    visible: (i = 1) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { delay: i * 0.3, duration: 1.2, ease: 'easeOut' }
    })
  };

  const paragraphVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 1.5, delay: 1.2, ease: 'easeOut' } }
  };

  const buttonVariant = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 1.2, delay: 1.6, ease: 'easeOut' } }
  };

  const logoVariant = {
    hidden: { opacity: 0, x: 50, rotate: 5 },
    visible: { opacity: 1, x: 0, rotate: 0, transition: { duration: 1.5, delay: 1.8, ease: 'easeOut' } }
  };

  return (
    <div
      className="relative w-full min-h-[90vh] bg-cover bg-center py-20 md:py-32 lg:pt-45 lg:pb-50"
      style={{ backgroundImage: `url(${BgImage})` }}
    >
        <BgDark>
<div className="container mx-auto px-6 md:px-10 relative z-10">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between">

          {/* Text Section */}
          <div className="w-full md:w-3/5 lg:w-3/5 text-center md:text-left mt-8 md:mt-0">
         

            <motion.h1
              custom={2}
              initial="hidden"
              animate="visible"
              variants={headingVariant}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6"
            >
              Adamjee School Career <span className="block">& Livelihood Club</span>
            </motion.h1>

            <motion.p
              initial="hidden"
              animate="visible"
              variants={paragraphVariant}
              className="text-lg sm:text-xl text-[#00CED1] mb-10 max-w-xl mx-auto md:mx-0"
            >
             Plan your path to professional success using career exploration tools, mentorship, skill-building resources, and guidance designed for students.
            </motion.p>

          <Link to='/registration'>
                <motion.button
                  initial="hidden"
                  animate="visible"
                  variants={buttonVariant}
                  className="px-10 py-4 bg-gradient-to-r from-purple-600 to-blue-500 text-xl text-white font-semibold rounded-2xl hover:from-purple-500 hover:to-blue-400 transition duration-200"
                >
                  Sign In
                </motion.button>
              </Link>
          </div>

          {/* Logo Section */}
          <div className="w-full md:w-2/5 lg:w-2/5 flex justify-center md:justify-end">
            <motion.img
              initial="hidden"
              animate="visible"
              variants={logoVariant}
              src={Logo}
              alt="ASCLC 3D Logo"
              className="w-64 h-auto sm:w-80 lg:w-96 object-contain drop-shadow-2xl"
            />
          </div>
        </div>

        {children}
      </div>
        </BgDark>

      
    </div>
  );
};

export default HomeHero;
