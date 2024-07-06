import React, { useState, useRef } from "react";
import { TfiArrowTopRight } from "react-icons/tfi";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { motion } from "framer-motion";
import Footer from "../components/Footer";
import { Helmet } from "react-helmet";
import { LocomotiveScrollProvider } from "react-locomotive-scroll";

const Ritajwll = () => {
  const [darkMode, setDarkmode] = useState(false);
  const handleClick = () => {
    setDarkmode(!darkMode);
  };


  return (
    <>
      <Helmet>
        <title>Devansh Khullar | Ritajwll</title>
        <meta
          name="description"
          content="VkiwiTech: Explore cutting-edge IT solutions with captivating UI, dynamic animations, and seamless client engagement through an interactive carousel and contact form."
        />
      </Helmet>
      
        <div
          className={`h-full w-full ${darkMode ? "bg-black" : "bg-white"} ${
            darkMode ? "text-white" : "text-black"
          }`}
        >
          <div
            className={`${
              darkMode ? "bg-black" : "bg-white"
            } flex items-center justify-end overflow-x-hidden `}
          >
            <div
              className={` ${
                darkMode ? "text-white" : "text-black"
              } px-4 fixed md:top-11 md:block hidden font-semibold font-arsenica right-20 z-20`}
            >
              {darkMode ? "Dark" : "Light"} theme :
            </div>
            <div className="px-4 fixed md:top-10 top-5 md:right-8 right-2 z-20 ">
              <input
                id="toggle"
                className="toggle"
                type="checkbox"
                onClick={handleClick}
              />
            </div>
          </div>
          <div
            className={`mx-auto md:w-3/4 flex flex-col md:flex-row gap-4 md:gap-0 justify-between md:mt-[7%] mt-[10%] items-center font-arsenica font-semibold md:text-5xl text-4xl ${
              darkMode ? "text-white" : "text-black"
            } ${darkMode ? "bg-black" : "bg-white"} `}
          >
            <motion.div
              initial={{ opacity: 0, x: "-30%" }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 2, ease: "easeOut" }}
            >
              Ritajwll
            </motion.div>
            <motion.a
              initial={{ opacity: 0, x: "30%" }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 2, ease: "easeOut" }}
              className={`font-arsenica font-semibold text-lg border-2  active:translate-x-[2px] active:translate-y-[2px] px-4 py-2 ${
                darkMode
                  ? "shadow-[4px_4px_0_#ffffff] active:shadow-[2px_2px_0_#ffffff] border-white"
                  : "shadow-[4px_4px_0_#000000] active:shadow-[2px_2px_0_#000000] border-black "
              } rounded-xl `}
              href="https://www.figma.com/design/w49uAqBC7d4JsmZ3nirLed/Ritajwll?node-id=0-1&t=5yNwAaDuzLLez6rb-1"
              target="_blank"
              rel="noreferrer noopener"
            >
              <button className="flex items-center">
                Check it out <TfiArrowTopRight className="mt-1 ml-1" />
              </button>
            </motion.a>
          </div>
          <motion.div
            initial={{ y: "80%" }}
            whileInView={{ y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="font-arsenica md:text-4xl text-3xl font-semibold mx-auto flex justify-center items-center md:py-10 pb-5 pt-10"
          >
            About The Design
          </motion.div>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="font-dmsans md:w-1/2 w-3/4 font-medium text-center mx-auto md:text-xl text-lg pb-16 "
          >
            Ritajwll, a facilities management organization in Qatar, needed a
            modern redesign for their website. I designed a new site for them,
            which included over 30 pages in both English and Arabic. The design,
            which is modern and sophisticated, features an elegant color palette
            that aligns with the company's brand identity and includes dedicated
            pages for their blog and contact forms.
          </motion.p>

          <div className="grid md:grid-cols-3 grid-cols-2 mx-auto md:w-3/4 w-[90%] gap-5 ">
            <motion.div  initial={{ opacity: 0, scale: 0.7 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 2, ease: "easeOut" }} className="col-span-2 drop-shadow-2xl bg-black rounded-2xl">
              <img src="ritaj.png" alt="" className=" rounded-2xl" />
            </motion.div>
            <motion.div  initial={{ opacity: 0, scale: 0.7 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 2, ease: "easeOut" }} className="drop-shadow-2xl md:col-span-1 col-span-2">
              <img src="ritaj3.jpg" alt="" className=" rounded-2xl" />
            </motion.div>
            <motion.div  initial={{ opacity: 0, scale: 0.7 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 2, ease: "easeOut" }} className="drop-shadow-2xl">
              <img src="ritaj4.jpg" alt="" className=" rounded-2xl" />
            </motion.div>
            
            <motion.div  initial={{ opacity: 0, scale: 0.7 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 2, ease: "easeOut" }} className="drop-shadow-2xl">
              <img src="ritaj5.jpg" alt="" className=" rounded-2xl" />
            </motion.div>
            <motion.div  initial={{ opacity: 0, scale: 0.7 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 2, ease: "easeOut" }} className="drop-shadow-2xl pb-5 md:col-span-1 col-span-2">
              <img src="ritaj2.jpg" alt="" className=" rounded-2xl" />
            </motion.div>
          
            <motion.div  initial={{ opacity: 0, scale: 0.7 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 2, ease: "easeOut" }} className="drop-shadow-2xl">
              <img src="ritaj6.jpg" alt="" className=" rounded-2xl" />
            </motion.div>
            <motion.div  initial={{ opacity: 0, scale: 0.7 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 2, ease: "easeOut" }} className="drop-shadow-2xl">
              <img src="ritaj7.jpg" alt="" className="rounded-2xl" />
            </motion.div>
            <motion.div  initial={{ opacity: 0, scale: 0.7 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 2, ease: "easeOut" }} className="drop-shadow-2xl">
              <img src="ritaj8.jpg" alt="" className="rounded-2xl" />
            </motion.div>
            <motion.div  initial={{ opacity: 0, scale: 0.7 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 2, ease: "easeOut" }} className="drop-shadow-2xl">
              <img src="ritaj9.jpg" alt="" className="rounded-2xl" />
            </motion.div>
            
            <motion.div  initial={{ opacity: 0, scale: 0.7 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 2, ease: "easeOut" }} className="col-span-2 drop-shadow-2xl">
              <img src="ritaj10.jpg" alt="" className="rounded-2xl" />
            </motion.div>
            
          </div>

          <div className="py-16 font-arsenica font-semibold text-xl flex justify-center items-center">
            <a
              className={`font-dmsans font-medium text-lg border-2 active:translate-x-[2px] active:translate-y-[2px] px-4 py-2 cursor-pointer ${
                darkMode
                  ? "shadow-[4px_4px_0_#ffffff] active:shadow-[2px_2px_0_#ffffff] border-white"
                  : "shadow-[4px_4px_0_#000000] active:shadow-[2px_2px_0_#000000] border-black "
              } rounded-xl `}
              href="https://www.figma.com/design/w49uAqBC7d4JsmZ3nirLed/Ritajwll?node-id=0-1&t=5yNwAaDuzLLez6rb-1"
               target="_blank"
              rel="noreferrer noopener"
            >
              <button className="flex items-center">
             See full design <IoIosArrowForward className="ml-2" />
              </button>
            </a>
          </div>
          <Footer darkMode={darkMode} />
        </div>
      
    </>
  );
};

export default Ritajwll;
