import React from "react";
import {motion} from 'framer-motion';

const Skills = ({ darkMode }) => {
  return (
    <>
      <div
        className={` ${
          darkMode ? "bg-black" : "bg-white"
        } flex flex-col justify-center items-center py-12 `}
      >
        <motion.div
        initial={{y:"80%"}}
        whileInView={{y:0}}
        transition={{duration:1,ease:'easeOut'}}
          className={` ${
            darkMode ? "text-white" : "text-black"
          } tracking-wider md:text-5xl text-4xl`}
        >
          WHAT I CAN DO
        </motion.div>

        <ul className="flex flex-wrap md:flex-nowrap md:ml-0 ml-[10%] md:justify-between md:w-1/2 my-10" >
            <div>

          <motion.li initial={{opacity:0,x:"-30%"}} whileInView={{opacity:1,x:0}} transition={{ease:'easeOut',duration:2}} className={`flex font-arsenica font-semibold items-center md:md:text-xl text-lg ${darkMode?"text-white":"text-black"}`}>
            {" "}
            <svg
              class={`md:w-12 md:h-12 w-10 h-10 me-2 ${darkMode?"text-white":"text-black"} m-2 dark:text-green-400 flex-shrink-0`}
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
            </svg>
            <div>

            Website design
            </div>
          </motion.li>
          <motion.li initial={{opacity:0,x:"-30%"}} whileInView={{opacity:1,x:0}} transition={{ease:'easeOut', duration:2,delay:0.1}} className={`flex font-arsenica font-semibold items-center md:text-xl text-lg ${darkMode?"text-white":"text-black"}`}>
            {" "}
            <svg
              class={`md:w-12 md:h-12 w-10 h-10 me-2 ${darkMode?"text-white":"text-black"} m-2 dark:text-green-400 flex-shrink-0`}
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
            </svg>
            <div >

            Website Development
            </div>
          </motion.li>
          <motion.li initial={{opacity:0,x:"-30%"}} whileInView={{opacity:1,x:0}} transition={{ease:'easeOut', duration:2,delay:0.2}} className={`flex font-arsenica font-semibold items-center md:text-xl text-lg ${darkMode?"text-white":"text-black"}`}>
            {" "}
            <svg
              class={`md:w-12 md:h-12 w-10 h-10 me-2 ${darkMode?"text-white":"text-black"} m-2 dark:text-green-400 flex-shrink-0`}
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
            </svg>
            Search Engine Optimization
          </motion.li>
          <motion.li initial={{opacity:0,x:"-30%"}} whileInView={{opacity:1,x:0}} transition={{ease:'easeOut', duration:2,delay:0.3}} className={`flex font-arsenica font-semibold items-center md:text-xl text-lg ${darkMode?"text-white":"text-black"}`}>
            {" "}
            <svg
              class={`md:w-12 md:h-12 w-10 h-10 me-2 ${darkMode?"text-white":"text-black"} m-2 dark:text-green-400 flex-shrink-0`}
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
            </svg>
            Performance Improvement
          </motion.li>
            </div>
            <div>
            <motion.li initial={{opacity:0,x:"30%"}} whileInView={{opacity:1,x:0}} transition={{ease:'easeOut', duration:2}} className={`flex font-arsenica font-semibold items-center md:text-xl text-lg ${darkMode?"text-white":"text-black"}`}>
            {" "}
            <svg
              class={`md:w-12 md:h-12 w-10 h-10 me-2 ${darkMode?"text-white":"text-black"} m-2 dark:text-green-400 flex-shrink-0`}
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
            </svg>
            Landing Page
          </motion.li>
          <motion.li initial={{opacity:0,x:"30%"}} whileInView={{opacity:1,x:0}} transition={{ease:'easeOut', duration:2,delay:0.1}} className={`flex font-arsenica font-semibold items-center md:text-xl text-lg ${darkMode?"text-white":"text-black"}`}>
            {" "}
            <svg
              class={`md:w-12 md:h-12 w-10 h-10 me-2 ${darkMode?"text-white":"text-black"} m-2 dark:text-green-400 flex-shrink-0`}
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
            </svg>
            Blogs
          </motion.li>
          <motion.li initial={{opacity:0,x:"30%"}} whileInView={{opacity:1,x:0}} transition={{ease:'easeOut', duration:2,delay:0.2}} className={`flex font-arsenica font-semibold items-center md:text-xl text-lg ${darkMode?"text-white":"text-black"}`}>
            {" "}
            <svg
              class={`md:w-12 md:h-12 w-10 h-10 me-2 ${darkMode?"text-white":"text-black"} m-2 dark:text-green-400 flex-shrink-0`}
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
            </svg>
            Portfolios
          </motion.li>
          <motion.li initial={{opacity:0,x:"30%"}} whileInView={{opacity:1,x:0}} transition={{ease:'easeOut', duration:2,delay:0.3}} className={`flex font-arsenica font-semibold items-center md:text-xl text-lg ${darkMode?"text-white":"text-black"}`}>
            {" "}
            <svg
              class={`md:w-12 md:h-12 w-10 h-10 me-2 ${darkMode?"text-white":"text-black"} m-2 dark:text-green-400 flex-shrink-0`}
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
            </svg>
            E-Commerce
          </motion.li>
            </div>
        </ul>
      </div>
    </>
  );
};

export default Skills;
