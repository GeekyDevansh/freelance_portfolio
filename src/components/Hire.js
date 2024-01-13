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
          } tracking-widest md:text-5xl text-4xl w-[90%] text-center `}
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
        

        <motion.section className="text-gray-600 body-font relative md:w-1/2 w-[90%] py-12 " ref={ref} style={{
          scale:scaleProgress,
          opacity:opacityProgress,
        }} >
  <div className={`container border-2 md:px-12 px-6 md:py-20 py-10 ${darkMode?"border-white shadow-[10px_10px_0_#ffffff]":"border-black shadow-[10px_10px_0_#000000]"} `}>
    <div className="lg:w-full md:w-full mx-auto">
      <form className="flex flex-wrap -m-2" action="https://formsubmit.co/devanshkhullar11@gmail.com" method="POST">
        <div className="p-2 w-1/2">
          <div className="relative font-arsenica  font-semibold ">
            <label for="name" className={`leading-7  ${darkMode?"text-white":"text-black"}`}>Name</label>
            <input type="text" id="name" name="name" className="w-full bg-gray-100  rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-black py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" required />
          </div>
        </div>
        <div className="p-2 w-1/2">
          <div className="relative  font-arsenica  font-semibold  ">
            <label for="email" className={`leading-7  ${darkMode?"text-white":"text-black"}`}>Email</label>
            <input type="email" id="email" name="email" className="w-full bg-gray-100  rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-black py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" required />
          </div>
        </div>
        <div className="p-2 w-full">
          <div className="relative  font-arsenica  font-semibold  ">
            <label for="message" className={`leading-7  ${darkMode?"text-white":"text-black"}`}>Message</label>
            <textarea id="message" name="message" className="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-black py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out" required ></textarea>
          </div>
        </div>
        <div className="p-2 w-full">
          <button className={` shadow-[6px_6px_0_#004d4d] flex mx-auto text-white py-2 px-8 bg-[#006666] text-lg active:translate-x-[2px] active:translate-y-[2px] active:shadow-[4px_4px_0_#004d4d] font-arsenica font-semibold `} type="submit" >Send</button>
        </div>
      </form>
    </div>
  </div>
</motion.section>
       
      </div>
    </>
  );
};

export default Hire;
