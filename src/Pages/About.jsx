import React from 'react'
import Background from '../Components/Background'
import ImageScrollHero from "../Components/ScrollExpand";
import Club from '../assets/Club.jpg'
import InfoCards from '../Components/InfoCards'
import Amiree from '../assets/Amiree.jpg'
import AutoPlay from '../Components/InfoCarousel'
import President from '../Components/President'
import Underline from '../Components/Underline'
import ContactUs from '../Components/Contact'
import AboutHero from '../Components/AboutHero'
import Miss from '../assets/SuraiyaMiss.jpg'



const About = () => {
  return (
    <>
    <Background>
      <AboutHero></AboutHero>

      <ImageScrollHero src={Club} />
<Underline title='Club Moderator' className='mb-30'></Underline>
<InfoCards
img={Miss}
name='Suraiya Miss'
rank='Assistat Teacher'
grade='Biology'></InfoCards>
<Underline title='Founders & Co-Founders' className='my-30'></Underline>
      <President></President>
      <Underline title='Panel Members' className='my-30'></Underline>
<AutoPlay></AutoPlay>
<Underline title='Contact Us' className='my-30'></Underline>
<ContactUs></ContactUs>





    </Background>

    </>

  )
}

export default About
