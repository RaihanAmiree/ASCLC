import React from "react";
import background from "../assets/HomeBG-1.jpg";
import WhatWeDo from "../Components/WhatWeDo";
import Moto from "../Components/Moto";
import Stats from "../Components/Stats";
import Footer from "../Components/Footer";
import AccordionSection from "../Components/AccordionSection.jsx";
import { Link } from "react-router-dom";
import Background from "../Components/Background.jsx";
import HomeHero from "../Components/HomeHero.jsx";


const Home = () => {
  return (
    <>
    <Background>

      <HomeHero>
      </HomeHero>
        


      <Moto />
      <Stats />
      <WhatWeDo />
      <AccordionSection />
    </Background>
    </>
  );
};

export default Home;
