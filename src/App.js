import React,{useState,useRef} from "react";
import Navbar from "./components/Navbar.js";
import Home from "./components/Home.js";


function App() {
  const [darkMode, setDarkmode] = useState(false);

 

  return (
    <>
      <Navbar darkMode={darkMode} setDarkmode={setDarkmode} />
      <div>
     <Home darkMode={darkMode} />
      </div>
    </>
  );
}

export default App;
