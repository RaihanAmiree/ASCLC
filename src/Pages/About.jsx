import React from 'react'
import Background from '../Components/Background'
import Club from '../assets/Club.jpg'
import InfoCards from '../Components/InfoCards'
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
<div className="w-full max-w-4xl mx-auto p-4 my-20">
  <img
    src={Club}
    alt="Club"
    className="w-full h-auto rounded-lg shadow-lg object-cover"
  />
</div>
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
