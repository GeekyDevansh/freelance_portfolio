import React from "react";
import { TfiArrowTopRight } from "react-icons/tfi";
import { IoIosArrowBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import Scroll from "../components/Scroll";

const VkiwiTech = ({darkMode}) => {

    const Navigate = useNavigate();

  return (
    <>
     <div className="mx-auto md:w-3/4 flex flex-col md:flex-row gap-4 md:gap-0 justify-between md:mt-[5%] mt-[10%] items-center font-arsenica font-semibold md:text-5xl text-4xl">
        <motion.div initial={{opacity:0,x:"-30%"}} whileInView={{opacity:1,x:0}} transition={{duration:2,ease:'easeOut'}}>vKiwiTech</motion.div>
        <motion.a
         initial={{opacity:0,x:"30%"}} whileInView={{opacity:1,x:0}} transition={{duration:2,ease:'easeOut'}}
          className="font-dmsans font-medium text-lg border-2 border-black active:translate-x-[2px] active:translate-y-[2px] active:shadow-[4px_4px_0_#000000] px-4 py-2 shadow-[6px_6px_0_#000000]"
          href="https://vkiwitech.com/"
          target="_blank"
          rel="noreferrer noopener"
        >
          <button className="flex items-center">
            Check It Out <TfiArrowTopRight className="mt-1 ml-1" />
          </button>
        </motion.a>
      </div>
      <div className="flex flex-wrap md:flex-nowrap gap-10 md:w-3/4 w-[90%] mx-auto my-16 justify-between items-center">
        <motion.div initial={{opacity:0,scale:0.7}} whileInView={{opacity:1,scale:1}} transition={{duration:2,ease:'easeOut'}}>
          <img src="/vkiwi.png" alt="" className="border-black border p-2"  />
        </motion.div>
        <motion.div initial={{opacity:0,scale:0.7}} whileInView={{opacity:1,scale:1}} transition={{duration:2,ease:'easeOut'}}>
          <img src="/vkiwi_mob_1.png" alt="" className="w-1/2 md:w-full mx-auto md:mx-0"  />
        </motion.div>
      </div>

        <motion.div initial={{y:"80%"}}
        whileInView={{y:0}}
        transition={{duration:1,ease:'easeOut'}} className="font-arsenica md:text-4xl text-3xl font-semibold mx-auto flex justify-center items-center my-16" >
                Technologies Used
        </motion.div>
        <div className="my-16 flex flex-wrap md:flex-nowrap gap-3 md:gap-0 justify-center items-center " >
        <motion.button initial={{opacity:0.3,y:"80%"}}
        whileInView={{opacity:1,y:0}}
        transition={{duration:1,ease:'easeOut',delay:0.2}} class="py-2 px-4 shadow-md no-underline border-2 border-black font-dmsans font-semibold text-sm btn-primary focus:outline-none active:shadow-none mr-2">HTML</motion.button>
        <motion.button initial={{opacity:0.3,y:"80%"}}
        whileInView={{opacity:1,y:0}}
        transition={{duration:1,ease:'easeOut',delay:0.4}} class="py-2 px-4 shadow-md no-underline border-2 border-black font-dmsans font-semibold text-sm btn-primary focus:outline-none active:shadow-none mr-2">CSS</motion.button>
        <motion.button initial={{opacity:0.3,y:"80%"}}
        whileInView={{opacity:1,y:0}}
        transition={{duration:1,ease:'easeOut',delay:0.6}} class="py-2 px-4 shadow-md no-underline border-2 border-black font-dmsans font-semibold text-sm btn-primary focus:outline-none active:shadow-none mr-2">JavaScript</motion.button>
        <motion.button initial={{opacity:0.3,y:"80%"}}
        whileInView={{opacity:1,y:0}}
        transition={{duration:1,ease:'easeOut',delay:0.8}} class="py-2 px-4 shadow-md no-underline border-2 border-black font-dmsans font-semibold text-sm btn-primary focus:outline-none active:shadow-none mr-2">React.js</motion.button>
        <motion.button initial={{opacity:0.3,y:"80%"}}
        whileInView={{opacity:1,y:0}}
        transition={{duration:1,ease:'easeOut',delay:1}} class="py-2 px-4 shadow-md no-underline border-2 border-black font-dmsans font-semibold text-sm btn-primary focus:outline-none active:shadow-none mr-2">Framer Motion</motion.button>
        <motion.button initial={{opacity:0.3,y:"80%"}}
        whileInView={{opacity:1,y:0}}
        transition={{duration:1,ease:'easeOut',delay:1.2}} class="py-2 px-4 shadow-md no-underline border-2 border-black font-dmsans font-semibold text-sm btn-primary focus:outline-none active:shadow-none mr-2">Vercel</motion.button>
        <motion.button initial={{opacity:0.3,y:"80%"}}
        whileInView={{opacity:1,y:0}}
        transition={{duration:1,ease:'easeOut',delay:1.4}} class="py-2 px-4 shadow-md no-underline border-2 border-black font-dmsans font-semibold text-sm btn-primary focus:outline-none active:shadow-none mr-2">TailwindCSS</motion.button>
        </div>

        <motion.div initial={{y:"80%"}}
        whileInView={{y:0}}
        transition={{duration:1,ease:'easeOut'}} className="font-arsenica md:text-4xl text-3xl font-semibold mx-auto flex justify-center items-center my-16" >
                About The Project
        </motion.div>
        <motion.p initial={{opacity:0}}
        whileInView={{opacity:1}}
        transition={{duration:1,ease:'easeOut'}} className="font-dmsans md:w-1/2 w-3/4 font-medium mx-auto md:text-xl text-lg mt-12" >VkiwiTech is a web-based platform that boasts a captivating UI with dynamic animations and an interactive carousel, showcasing their IT consulting prowess. The seamless contact form ensures effortless client engagement, making it a visually appealing and user-friendly platform for exploring cutting-edge IT solutions.</motion.p>

        <motion.div  className="font-arsenica md:text-4xl text-3xl font-semibold mx-auto flex justify-center items-center my-16" >
                Salient Features 
        </motion.div>
        <ul className="flex flex-wrap md:flex-nowrap ml-[15%] md:ml-auto justify-between md:w-1/2 my-16 mx-auto" >
            <div>
          <motion.li initial={{opacity:0,x:"-30%"}} whileInView={{opacity:1,x:0}} transition={{ease:'easeOut',duration:2,delay:0.1}}  className={`flex font-dmsans font-semibold items-center text-xl ${darkMode?"text-white":"text-black"}`}>
            {" "}
            <svg
              class={`md:w-12 md:h-12 w-8 h-8 me-2 ${darkMode?"text-white":"text-black"} m-2   flex-shrink-0`}
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
            </svg>
            <div>

            User-Friendly
            </div>
          </motion.li>
          <motion.li initial={{opacity:0,x:"-30%"}} whileInView={{opacity:1,x:0}} transition={{ease:'easeOut',duration:2}}  className={`flex font-dmsans font-semibold items-center text-xl ${darkMode?"text-white":"text-black"}`}>
            {" "}
            <svg
              class={`md:w-12 md:h-12 w-8 h-8 me-2 ${darkMode?"text-white":"text-black"} m-2   flex-shrink-0`}
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
            </svg>
            <div >

            Mobile Responsive
            </div>
          </motion.li>
          <motion.li initial={{opacity:0,x:"-30%"}} whileInView={{opacity:1,x:0}} transition={{ease:'easeOut',duration:2,delay:0.1}}  className={`flex font-dmsans font-semibold items-center text-xl ${darkMode?"text-white":"text-black"}`}>
            {" "}
            <svg
              class={`md:w-12 md:h-12 w-8 h-8 me-2 ${darkMode?"text-white":"text-black"} m-2   flex-shrink-0`}
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
            </svg>
            Fast Performance
          </motion.li>
            </div>
            <div>
            <motion.li initial={{opacity:0,x:"-30%"}} whileInView={{opacity:1,x:0}} transition={{ease:'easeOut',duration:2,delay:0.2}}  className={`flex font-dmsans font-semibold items-center text-xl ${darkMode?"text-white":"text-black"}`}>
            {" "}
            <svg
              class={`md:w-12 md:h-12 w-8 h-8 me-2 ${darkMode?"text-white":"text-black"} m-2   flex-shrink-0`}
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
            </svg>
            Safe and Secure
          </motion.li>
          <motion.li initial={{opacity:0,x:"-30%"}} whileInView={{opacity:1,x:0}} transition={{ease:'easeOut',duration:2,delay:0.3}}  className={`flex font-dmsans font-semibold items-center text-xl ${darkMode?"text-white":"text-black"}`}>
            {" "}
            <svg
              class={`md:w-12 md:h-12 w-8 h-8 me-2 ${darkMode?"text-white":"text-black"} m-2   flex-shrink-0`}
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
            </svg>
            Sleek Design
          </motion.li>
          <motion.li initial={{opacity:0,x:"-30%"}} whileInView={{opacity:1,x:0}} transition={{ease:'easeOut',duration:2,delay:0.4}}  className={`flex font-dmsans font-semibold items-center text-xl ${darkMode?"text-white":"text-black"}`}>
            {" "}
            <svg
              class={`md:w-12 md:h-12 w-8 h-8 me-2 ${darkMode?"text-white":"text-black"} m-2   flex-shrink-0`}
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
            </svg>
            Form Integration
          </motion.li>
            </div>
        </ul>

        <div className="flex flex-wrap md:flex-nowrap gap-10 md:w-3/4 w-[90%] mx-auto mt-12 justify-between items-center">
        <motion.div initial={{opacity:0,scale:0.7}} whileInView={{opacity:1,scale:1}} transition={{duration:2,ease:'easeOut'}} className="shadow-xl ">
          <img src="/kiwi.png" alt="" className="border-black border p-2" />
        </motion.div>
        <motion.div initial={{opacity:0,scale:0.7}} whileInView={{opacity:1,scale:1}} transition={{duration:2,ease:'easeOut'}}>
          <img src="/vkiwi_mob_2.png" alt="" className="w-1/2 mx-auto md:w-full md:mx-0" />
        </motion.div>
      </div>

    <div className="my-16 font-arsenica font-semibold text-xl flex justify-center items-center" >

    <div
          className="font-dmsans font-medium text-lg border-2 border-black active:translate-x-[2px] active:translate-y-[2px] active:shadow-[4px_4px_0_#000000] px-4 py-2 shadow-[6px_6px_0_#000000] cursor-pointer " onClick={()=>Navigate('/')}
        >
          <button className="flex items-center">
            <IoIosArrowBack className="mr-2" /> Go back home
          </button>
        </div>

    </div>
<Scroll/>
    </>
  );
};

export default VkiwiTech;
