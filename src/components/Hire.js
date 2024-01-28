import React from "react";
import {motion} from 'framer-motion';

const Hire = ({ darkMode }) => {


  return (
    <>
      <div
        className={` ${
          darkMode ? "bg-black" : "bg-white"
        } flex flex-col justify-center items-center `}
      >
        <motion.div
        initial={{opacity:0,y:"80%"}}
        whileInView={{opacity:1,y:0}}
        transition={{duration:1,ease:'easeOut'}}
          className={` ${
            darkMode ? "text-white" : "text-black"
          } tracking-widest md:text-5xl text-4xl w-[90%] text-center `}
        >
          HIRE ME
        </motion.div>

        <motion.div
        initial={{opacity:0,y:"80%"}}
        whileInView={{opacity:1,y:0}}
        transition={{duration:1,ease:'easeOut',delay:0.1}}
          className={` ${
            darkMode ? "text-white bg-black" : "text-black bg-white"
          } font-arsenica font-semibold md:text-xl text-lg py-2 text-center`}
        >
          Now that you are impressed, let's talk business.
        </motion.div>
        

        <motion.section className="text-gray-600 body-font relative md:w-1/2 w-[90%] py-12 " initial={{scale:0.5,opacity:0}} whileInView={{scale:1,opacity:1}} transition={{duration:1}} >
  <div className={`container border-2 md:px-12 px-6 md:py-20 py-10 ${darkMode?"border-white shadow-[6px_6px_0_#ffffff]":"border-black shadow-[6px_6px_0_#000000]"} `}>
    <div className="lg:w-full md:w-full mx-auto">
      <form className="flex flex-wrap -m-2" action="https://formsubmit.co/2fc845d42716d1c5b554e3018b03050d" method="POST">
        <div className="p-2 w-1/2">
          <div className="relative font-arsenica  font-semibold ">
            <label htmlFor="name" className={`leading-7  ${darkMode?"text-white":"text-black"}`}>Name</label>
            <input type="text" id="name" name="name" className="w-full bg-gray-100  rounded border border-gray-500 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-black py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" required />
          </div>
        </div>
        <div className="p-2 w-1/2">
          <div className="relative  font-arsenica  font-semibold  ">
            <label htmlFor="email" className={`leading-7  ${darkMode?"text-white":"text-black"}`}>Email</label>
            <input type="email" id="email" name="email" className="w-full bg-gray-100  rounded border border-gray-500 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-black py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" required />
          </div>
        </div>
        <div className="p-2 w-full">
          <div className="relative  font-arsenica  font-semibold  ">
            <label htmlFor="message" className={`leading-7  ${darkMode?"text-white":"text-black"}`}>Message</label>
            <textarea id="message" name="message" className="w-full bg-gray-100 rounded border border-gray-500 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-black py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out" required ></textarea>
          </div>
        </div>
        <div className="p-2 w-full">
          <button className={`flex mx-auto py-2 px-8 border-2 text-lg active:translate-x-[2px] ${
              darkMode
                ? "shadow-[4px_4px_0_#ffffff] active:shadow-[2px_2px_0_#ffffff] border-white text-white"
                : "shadow-[4px_4px_0_#000000] active:shadow-[2px_2px_0_#000000] border-black text-black "
            } font-arsenica font-semibold rounded-xl`} type="submit" >Send</button>
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
