import { useState} from "react";
import Navbar from "./components/Navbar.js";
import Hero from "./components/Hero.js";
import About from "./components/About.js";
import Skills from "./components/Skills.js";
import Tools from "./components/Tools.js";
import Projects from "./components/Projects.js";
import Slogan from "./components/Slogan.js";
import Testimonials from "./components/Testimonials.js";
import Hire from "./components/Hire.js";
import Footer from "./components/Footer.js";
import Scroll from "./components/Scroll.js";


function App() {
    const [darkMode,setDarkmode]=useState(false);

   
    
  return (
    <>
    <Navbar darkMode={darkMode} setDarkmode={setDarkmode} />
        <Hero darkMode={darkMode} />
        <About darkMode={darkMode} />
        <Skills darkMode={darkMode}/>
        <Tools darkMode={darkMode} />
        <Projects darkMode={darkMode} />
        <Slogan darkMode={darkMode} />
        <Testimonials darkMode={darkMode} />
        <Hire darkMode={darkMode} />
        <Footer darkMode={darkMode} />
        <Scroll/>
    </>
  );
}

export default App;
