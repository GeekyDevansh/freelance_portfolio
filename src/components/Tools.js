import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { TiHtml5 } from "react-icons/ti";
import { TiCss3 } from "react-icons/ti";
import { IoLogoJavascript } from "react-icons/io5";
import { FaReact } from "react-icons/fa6";
import { SiMysql } from "react-icons/si";
import { FaWordpress } from "react-icons/fa";
import { SiWoocommerce } from "react-icons/si";
import { FaShopify } from "react-icons/fa";
import { FaWix } from "react-icons/fa";
import { DiNodejs } from "react-icons/di";
import { FaAws } from "react-icons/fa";
import { BiLogoTailwindCss } from "react-icons/bi";
import { motion } from "framer-motion"; 


const Tools = ({ darkMode }) => {
  const settings = {
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    speed: 6000,
    pauseOnHover: false,
    cssEase: "linear",
    rtl: true,
    arrows:false,
  };

  const settings2 = {
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    speed: 7000,
    pauseOnHover: false,
    cssEase: "linear",
    arrows:false,
  };

  return (
    <>
      <div
        className={` ${
          darkMode ? "bg-black" : "bg-white"
        } flex flex-col justify-center items-center py-12 `}
      >
        <motion.div initial={{opacity:0,y:"80%"}}
        whileInView={{opacity:1,y:0}}
        transition={{duration:1,ease:'easeOut'}}
          className={` ${
            darkMode ? "text-white" : "text-black"
          } tracking-widest text-5xl w-[90%] text-center`}
        >
          TOOLS I USE
        </motion.div>
        <div className={`md:w-1/3 w-[70%] md:mt-12 mt-16 ${darkMode?"text-white":"text-black"} `}>
          <Slider {...settings2}>
            <div>
              <div className="md:md:text-8xl text-6xl">
                <SiWoocommerce />
              </div>
            </div>
            <div className="flex justify-center">
              <div className="md:text-8xl text-6xl">
                <FaShopify />
              </div>
            </div>
            <div>
              <h3 className="md:text-8xl text-6xl">
                <FaWix />
              </h3>
            </div>
            <div>
              <h3 className="md:text-8xl text-6xl">
                <FaWordpress />
              </h3>
            </div>
          </Slider>
        </div>
        <div className={`md:w-1/2 w-[90%] md:my-12 my-10 ${darkMode?"text-white":"text-black"} `}>
          <Slider {...settings}>
            <div>
              <div className="md:text-8xl text-6xl">
                <TiHtml5 />
              </div>
            </div>
            <div className="flex justify-center">
              <div className="md:text-8xl text-6xl">
                <DiNodejs />
              </div>
            </div>
            <div>
              <h3 className="md:text-8xl text-6xl">
                <SiMysql />
              </h3>
            </div>
            <div>
              <h3 className="md:text-8xl text-6xl">
              <FaAws />
              </h3>
            </div>
            <div>
              <h3 className="md:text-8xl text-6xl">
                <FaReact />
              </h3>
            </div>
            <div>
              <h3 className="md:text-8xl text-6xl">
                <IoLogoJavascript />
              </h3>
            </div>
            <div>
              <div className="md:text-8xl text-6xl ">
                <TiCss3 />
              </div>
            </div>
            <div>
              <div className="md:text-8xl text-6xl ">
              <BiLogoTailwindCss />
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </>
  );
};

export default Tools;
