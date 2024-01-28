import React,{useState,useRef} from "react";
import Navbar from "./components/Navbar.js";
import { LocomotiveScrollProvider } from "react-locomotive-scroll";
import Home from "./components/Home.js";


function App() {
  const [darkMode, setDarkmode] = useState(false);

  const ref = useRef(null);

  const options = {
    smooth: true,
  } 

  return (
    <>
      <Navbar darkMode={darkMode} setDarkmode={setDarkmode} />
      <LocomotiveScrollProvider options={options} containerRef={ref}>
      <div data-scroll-container ref={ref} data-scroll-section >
     <Home darkMode={darkMode} />
      </div>
      </LocomotiveScrollProvider>
      {/* <Scroll /> */}
    </>
  );
}

export default App;
