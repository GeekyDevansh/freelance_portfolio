import React from 'react';
import Hero from './Hero';
import Description from './Description';
import About from './About';
import Skills from './Skills';
import Tools from './Tools';
import Projects from './Projects';
import Slogan from './Slogan';
import Testimonials from './Testimonials';
import Hire from './Hire';
import Footer from './Footer';

const Home = ({darkMode}) => {
  return (
    <>
    
    <Hero darkMode={darkMode} />
      <Description darkMode={darkMode} />
      <About darkMode={darkMode} />
      <Skills darkMode={darkMode} />
      <Tools darkMode={darkMode} />
      <Projects darkMode={darkMode} />
      <Slogan darkMode={darkMode} />
      <Testimonials darkMode={darkMode} />
      <Hire darkMode={darkMode} />
      <Footer darkMode={darkMode} />
    
    </>
  )
}

export default Home