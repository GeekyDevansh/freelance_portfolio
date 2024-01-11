import React,{useRef} from 'react';
import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import {useNavigate} from "react-router-dom";
import {motion, useScroll, useTransform} from 'framer-motion';

const Projects = ({darkMode}) => {

    const AutoplaySlider = withAutoplay(AwesomeSlider);
    const navigate = useNavigate();
    const ref=useRef(null);

  const {scrollYProgress}=useScroll({
    target:ref,
    offset:["0 1", "1.33 1"],
  });

  const scaleProgress  = useTransform(scrollYProgress,[0,1],[0.8,1]);
  const opacityProgress  = useTransform(scrollYProgress,[0,1],[0.6,1]);

  return (
    <>
    
    <div className={` ${darkMode?"bg-black":"bg-white"} flex flex-col justify-center items-center `}>

    <motion.div initial={{y:"80%"}}
        whileInView={{y:0}}
        transition={{duration:1,ease:'easeOut'}} className={` ${darkMode?"text-white":"text-black"} tracking-widest md:text-5xl text-4xl w-[90%] text-center`} >
        MY ART
    </motion.div>

    <motion.div initial={{y:"80%"}}
        whileInView={{y:0}}
        transition={{duration:1,ease:'easeOut',delay:0.1}} className={` ${darkMode?"text-white":"text-black"} font-arsenica font-semibold md:my-6 mt-2 md:mt-auto mb-6 md:mb-auto md:text-xl text-lg`} >
        Works that I am most proud of.
    </motion.div>

    <motion.div ref={ref} style={{
          scale:scaleProgress,
          opacity:opacityProgress,
        }} className={`md:w-[60%] w-[90%] border-2 md:px-8 px-2 md:pb-8 pb-2 ${darkMode?"border-white shadow-[10px_10px_0_#ffffff]":"border-black shadow-[10px_10px_0_#000000]"} mb-12 drop-shadow-2xl `} >
        <div className='flex gap-2 md:py-2 py-1' >

        <div className='bg-red-500 md:w-4 md:h-4 w-1 h-1  rounded-full' >
        </div>
        <div className='bg-yellow-500 md:w-4 md:h-4 w-1 h-1 rounded-full' >
        </div>
        <div className='bg-green-500 md:w-4 md:h-4 w-1 h-1 rounded-full' >
        </div>
        </div>
    <AutoplaySlider play={true} interval={3000} animation="fallAnimation" bullets={false} >
    <div data-src="matchms.png "  className='cursor-pointer' />
    <div data-src="vkiwi.png "  className='cursor-pointer' />
    <div data-src="moda.png "  className='cursor-pointer' />
    <div data-src="raktbank.png "  className='cursor-pointer'/>
  </AutoplaySlider>
    </motion.div>
        <div className={`flex flex-wrap md:flex-nowrap justify-center items-center md:gap-4 gap-2 font-arsenica font-semibold md:text-xl mb-12 ${darkMode?"text-white":"text-black"} w-[90%] `} >
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