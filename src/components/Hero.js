import React from 'react';
import {motion} from 'framer-motion';
import Spotlight from './Spotlight';


const Hero = ({darkMode}) => {
  return (
    <>
     <Spotlight
        className="-top-20 left-0 md:left-60 md:-top-20"
        fill={darkMode?"white":"gray"}
      />
    <div className={` ${darkMode?"bg-black text-white":"bg-white text-black"} h-screen w-full flex flex-col justify-center items-center`}  >
      <motion.h1 initial={{opacity:0.8,x:"-20%"}} whileInView={{opacity:1,x:0}} transition={{ ease: "easeOut", duration: 2 }} className="font-arsenica font-semibold md:text-7xl text-4xl tracking-widest z-2" >Devansh Khullar</motion.h1>
          <motion.img initial={{opacity:0.5,scale:0.5,rotate:0}} whileInView={{opacity:1,scale:1,rotate:'-5deg'}} whileHover={{rotate:0}} transition={{ ease: "easeOut", duration: 2 }} className="grayscale hover:grayscale-0 md:w-1/5 w-[60%] z-0 cursor-pointer" src="/dp.webp" alt="" />
      <motion.div initial={{opacity:0.8,x:"20%"}} whileInView={{opacity:1,x:0}} transition={{ ease: "easeOut", duration: 2 }} className="font-dmsans md:text-8xl text-5xl tracking-widest z-2" > PORTFOLIO </motion.div>
      <motion.p initial={{opacity:0,scale:0.5}} whileInView={{opacity:1,scale:1}} transition={{ ease: "easeOut", duration: 2 }} className="text-md tracking-wider mt-5 underline underline-offset-8" >Web Developer and UI/UX</motion.p>
    </div>
    </>
  )
}

export default Hero