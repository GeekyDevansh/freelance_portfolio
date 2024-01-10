import React from 'react';
import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import {useNavigate} from "react-router-dom";
import { motion } from 'framer-motion';

const Projects = ({darkMode}) => {

    const AutoplaySlider = withAutoplay(AwesomeSlider);
    const navigate = useNavigate();

  return (
    <>
    
    <div className={` ${darkMode?"bg-black":"bg-white"} flex flex-col justify-center items-center `}>

    <motion.div initial={{y:"80%"}}
        whileInView={{y:0}}
        transition={{duration:1,ease:'easeOut'}} className={` ${darkMode?"text-white":"text-black"} tracking-wider text-5xl`} >
        MY ART
    </motion.div>

    <motion.div initial={{y:"80%"}}
        whileInView={{y:0}}
        transition={{duration:1,ease:'easeOut',delay:0.1}} className={` ${darkMode?"text-white":"text-black"} font-arsenica font-semibold my-6 text-xl`} >
        Works that I am most proud of.
    </motion.div>

    <div className={`md:w-[60%] w-[90%] border-2 px-8 pb-8 ${darkMode?"border-white shadow-[10px_10px_0_#ffffff]":"border-black shadow-[10px_10px_0_#000000]"} mb-12 drop-shadow-2xl `} >
        <div className='flex gap-2 py-2' >

        <div className='bg-red-500 w-4 h-4 rounded-full' >
        </div>
        <div className='bg-yellow-500 w-4 h-4 rounded-full' >
        </div>
        <div className='bg-green-500 w-4 h-4 rounded-full' >
        </div>
        </div>
    <AutoplaySlider play={true} interval={3000} animation="fallAnimation" bullets={false} >
    <div data-src="matchms.png "  className='cursor-pointer' />
    <div data-src="vkiwi.png "  className='cursor-pointer' />
    <div data-src="moda.png "  className='cursor-pointer' />
    <div data-src="raktbank.png "  className='cursor-pointer'/>
  </AutoplaySlider>
    </div>
        <div className={`flex flex-wrap md:flex-nowrap justify-center items-center md:gap-4 gap-2 font-arsenica font-semibold md:text-xl mb-12 ${darkMode?"text-white":"text-black"} `} >
            <div className='hover:underline underline-offset-8 cursor-pointer' onClick={()=>navigate("/matchmyservice")} >MatchMyService</div>
            <div className='text-2xl' >&#183;</div>
            <div className='hover:underline underline-offset-8 cursor-pointer' onClick={()=>navigate("/vkiwitech")} >vKiwiTech</div>
            <div className='text-2xl'  > &#183; </div>
            <div className='hover:underline underline-offset-8 cursor-pointer' onClick={()=>navigate("/modaonlineshopping")} >Moda Online Shopping</div>
            <div className='text-2xl'  > &#183; </div>
            <div className='hover:underline underline-offset-8 cursor-pointer' onClick={()=>navigate("/raktbank")} >RaktBank</div>
        </div>
        </div>


    </>
  )
}

export default Projects