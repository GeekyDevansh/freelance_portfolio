import React,{useState,useRef} from "react";
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
import Description from "./components/Description.js";
import { LocomotiveScrollProvider } from "react-locomotive-scroll";
import Home from "./components/Home.js";


function App() {
  const [darkMode, setDarkmode] = useState(true);

  const ref = useRef(null);

  const options = {
    smooth: true,
  } 

  return (
    <>
      <Navbar darkMode={darkMode} setDarkmode={setDarkmode} />
      <LocomotiveScrollProvider options={options} containerRef={ref}>
      <div data-scroll-container ref={ref}>
     <Home darkMode={darkMode} />
      </div>
      </LocomotiveScrollProvider>
      {/* <Scroll /> */}
    </>
  );
}

export default App;
