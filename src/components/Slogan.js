import React from 'react';
import {motion} from 'framer-motion';

const Slogan = ({darkMode}) => {

  return (
    <>
    <div className={`${darkMode?"bg-black text-white":"bg-white text-black"}`} >

    <div className={`w-[60%] flex flex-col justify-center items-center py-24 mx-auto h-full `} >

        <motion.div initial={{opacity:0, scale:0.8}} whileInView={{opacity:1, scale:1}} transition={{ ease: "easeOut", duration: 0.5 }} className='font-arsenica font-semibold md:text-8xl text-6xl text-center ' >
        In the realm of creation, <br /> I am the architect of possibilities.
        </motion.div>
        
    </div>
    </div>
    </>
  )
}

export default Slogan