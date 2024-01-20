import React from 'react';
import { motion } from 'framer-motion';

const Description = ({darkMode}) => {
  return (
    <>
    <div  className={`${darkMode?"text-white bg-black":"text-black bg-white"}`} >

    <motion.p initial={{scale:0.8,opacity:0}}
        whileInView={{scale:1,opacity:1}}
        transition={{duration:1,ease:'easeOut'}}  className={`${darkMode?"text-white bg-black":"text-black bg-white"} font-arsenica md:w-[60%] w-[90%] mx-auto font-semibold md:py-32 py-28 tracking-widest text-center text-xl italic`} >
    "As a freelance web developer, I bring expertise in crafting dynamic and visually appealing websites, tailored to enhance your online presence. <br />
     From conceptualization to execution, I transform ideas into engaging digital experiences."
    </motion.p>
    </div>
    
    </>
  )
}

export default Description