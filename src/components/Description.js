import React from "react";
import { motion } from "framer-motion";

const Description = ({ darkMode }) => {
  return (
    <>
      <div>
        <div
          className={`flex flex-wrap-reverse md:flex-nowrap justify-center items-center ${
            darkMode ? "bg-black" : "bg-white"
          } bg-none ${
            darkMode ? "md:bg-wave-pattern-dark" : "md:bg-wave-pattern"
          } bg-no-repeat bg-contain ${darkMode ? "bg-top" : "bg-bottom"} `}
        >
          <div className="md:w-1/2 md:py-20 pt-10 pb-5  md:ml-16 ">
            <motion.p
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className={`${
                darkMode ? "text-white " : "text-black"
              } font-arsenica mx-auto md:mr-0 tracking-widest text-center md:text-3xl text-2xl leading-relaxed md:w-3/4 w-[90%] `}
            >
              As a freelance web developer, I bring expertise in crafting
              dynamic and visually appealing websites, tailored to enhance your
              online presence.
            </motion.p>
          </div>
          <motion.div initial={{opacity:0}} whileInView={{opacity:1}} transition={{duration:1}} className={` mx-auto md:ml-10 md:py-20 pt-5 w-[90%] md:w-auto `}>
            <div className="bg-white px-5 pt-5 pb-16 drop-shadow-2xl border">
              <div className="rounded-2xl bg-cover md:w-96 w-full h-60 md:h-96 bg-dp bg-no-repeat bg-center border grayscale hover:grayscale-0 "></div>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Description;
