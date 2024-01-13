import React from 'react';
import {motion} from 'framer-motion';

const Slogan = ({darkMode}) => {

  return (
    <>
    <div className={`${darkMode?"bg-black text-white":"bg-white text-black"}`} >

    <div className={`w-[60%] flex flex-col justify-center items-center py-24 mx-auto h-full `} >

        <motion.div initial={{opacity:0.8,x:"-20%"}} whileInView={{opacity:1,x:0}} transition={{ ease: "easeOut", duration: 2 }} className='font-arsenica font-semibold italic text-5xl text-left ' >
        In the realm of creation,
        </motion.div>
        <motion.div initial={{opacity:0.8,x:"20%"}} whileInView={{opacity:1,x:0}} transition={{ ease: "easeOut", duration: 2 }} className='font-arsenica text-5xl text-right italic font-semibold ' >
        I am the architect of possibilities.
        </motion.div>
    </div>
    </div>
    </>
  )
}

export default Slogan