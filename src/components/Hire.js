import React,{useRef} from "react";
import {motion, useScroll, useTransform} from 'framer-motion';

const Hire = ({ darkMode }) => {

  const ref=useRef(null);

  const {scrollYProgress}=useScroll({
    target:ref,
    offset:["0 1", "1.33 1"],
  });

  const scaleProgress  = useTransform(scrollYProgress,[0,1],[0.8,1]);
  const opacityProgress  = useTransform(scrollYProgress,[0,1],[0.6,1]);

  return (
    <>
      <div
        className={` ${
          darkMode ? "bg-black" : "bg-white"
        } flex flex-col justify-center items-center `}
      >
        <motion.div
        initial={{y:"80%"}}
        whileInView={{y:0}}
        transition={{duration:1,ease:'easeOut'}}
          className={` ${
            darkMode ? "text-white" : "text-black"
          } tracking-wider text-5xl`}
        >
          HIRE ME
        </motion.div>

        <motion.div
        initial={{y:"80%"}}
        whileInView={{y:0}}
        transition={{duration:1,ease:'easeOut',delay:0.1}}
          className={` ${
            darkMode ? "text-white bg-black" : "text-black bg-white"
          } font-arsenica font-semibold md:text-xl text-lg py-2 text-center`}
        >
          Now that you are impressed, let's talk business.
        </motion.div>
        

        <motion.section class="text-gray-600 body-font relative md:w-1/2 w-[90%] py-12 " ref={ref} style={{
          scale:scaleProgress,
          opacity:opacityProgress,
        }} >
  <div class={`container border-2 md:px-12 px-6 md:py-20 py-10 ${darkMode?"border-white shadow-[10px_10px_0_#ffffff]":"border-black shadow-[10px_10px_0_#000000]"} `}>
    <div class="lg:w-full md:w-full mx-auto">
      <div class="flex flex-wrap -m-2">
        <div class="p-2 w-1/2">
          <div class="relative font-arsenica  font-semibold ">
            <label for="name" class={`leading-7  ${darkMode?"text-white":"text-black"}`}>Name</label>
            <input type="text" id="name" name="name" class="w-full bg-gray-100  rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-black py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
          </div>
        </div>
        <div class="p-2 w-1/2">
          <div class="relative  font-arsenica  font-semibold  ">
            <label for="email" class={`leading-7  ${darkMode?"text-white":"text-black"}`}>Email</label>
            <input type="email" id="email" name="email" class="w-full bg-gray-100  rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-black py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
          </div>
        </div>
        <div class="p-2 w-full">
          <div class="relative  font-arsenica  font-semibold  ">
            <label for="message" class={`leading-7  ${darkMode?"text-white":"text-black"}`}>Message</label>
            <textarea id="message" name="message" class="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-black py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
          </div>
        </div>
        <div class="p-2 w-full">
          <button class={` shadow-[6px_6px_0_#004d4d] flex mx-auto text-white py-2 px-8 bg-[#006666] text-lg active:translate-x-[2px] active:translate-y-[2px] active:shadow-[4px_4px_0_#004d4d] font-arsenica font-semibold `}>Send</button>
        </div>
      </div>
    </div>
  </div>
</motion.section>
       
      </div>
    </>
  );
};

export default Hire;
