import React from "react";
import background from "../assets/HomeBG-1.jpg";
import Footer from "../Components/Footer"
import WhatWeDo from "../Components/WhatWeDo";
import OurServices from "../Components/OurServices"
import CVEntry from "../Components/CVEntry";
import PDFEntry from "../Components/PDFEntry";
import Underline from "../Components/Underline";
import ChatbotEntry from "../Components/ChatbotEntry"
import MotivationEntry from "../Components/MotivationEntry"
import CourseEntry from "../Components/CourseEntry"
import Background from "../Components/Background";
import ServiceHero from "../Components/ServiceHero";
import { Link } from "react-router-dom";



const Services = () => {
  return (
    <>
    <Background>
      <ServiceHero>
          {/* <Link to='/chatbot'>
    <dotlottie-wc
  src="https://lottie.host/70b1744e-7d26-474d-9c03-1895e50c5052/T0ZuJEvwAu.lottie"
  className="
    absolute
    z-30
    cursor-pointer
    transition-transform
    hover:scale-110

    bottom-[-255px]
    right-6

    sm:bottom-8
    sm:right-8

    md:bottom-10
    md:right-10

    lg:bottom-12
    lg:right-12

    xl:bottom-16
    xl:right-16
    xl:w-[300px]
  "
  autoplay
  loop
/>

        </Link> */}
        
        
        </ServiceHero>
      <OurServices></OurServices>
      <Underline title="Get Services" className="my-20"></Underline>
      <CVEntry></CVEntry>
      <PDFEntry></PDFEntry>
      <ChatbotEntry></ChatbotEntry>
      <MotivationEntry></MotivationEntry>
      <CourseEntry></CourseEntry>
    </Background>
    </>
  )
}

export default Services
