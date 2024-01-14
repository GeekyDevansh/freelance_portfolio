import React,{useState} from "react";
import { TfiArrowTopRight } from "react-icons/tfi";
import { IoIosArrowBack } from "react-icons/io";
import { motion } from "framer-motion";
import Scroll from "../components/Scroll";
import Footer from "../components/Footer";
import { Helmet } from "react-helmet";

const ModaOnlineShopping = () => {

  const [darkMode,setDarkmode] = useState(false);
  const handleClick = ()=>{
    setDarkmode(!darkMode);
  }

  return (
    <>
      <Helmet>
            <title>Devansh Khullar | Moda E-commerce</title>
            <meta name="description" content="Moda Online Shopping: Streamlined e-commerce with user-friendly UI, Next.js for frontend, Sanity.io for product management, and Stripe for secure payments." />
        </Helmet>
    <div className={`h-full w-full ${darkMode?"bg-black":"bg-white"} ${darkMode?"text-white":"text-black"}`} >  
  <div className={`${darkMode?"bg-black":"bg-white"} flex items-center justify-end overflow-x-hidden `} >
  <div className={` ${darkMode?"text-white":"text-black"} px-4 fixed md:top-11 md:block hidden font-semibold font-arsenica right-20 z-20`} >
            {darkMode?"Dark":"Light"} theme :
          </div>
          <div className='px-4 fixed md:top-10 top-5 md:right-8 right-2 z-20 ' >
        <input id="toggle" className="toggle" type="checkbox" onClick={handleClick} />
          </div>
        </div>
     <div className={`mx-auto md:w-3/4 flex flex-col md:flex-row gap-4 md:gap-0 justify-between md:mt-[7%] mt-[10%] items-center font-arsenica font-semibold md:text-5xl text-4xl ${darkMode?"text-white":"text-black"} ${darkMode?"bg-black":"bg-white"} `}>
        <motion.div initial={{opacity:0,x:"-30%"}} whileInView={{opacity:1,x:0}} transition={{duration:2,ease:'easeOut'}}>Moda Online Shopping</motion.div>
        <motion.a
         initial={{opacity:0,x:"30%"}} whileInView={{opacity:1,x:0}} transition={{duration:2,ease:'easeOut'}}
          className={`font-dmsans font-medium text-lg border-2  active:translate-x-[2px] active:translate-y-[2px] px-4 py-2 ${darkMode?"shadow-[6px_6px_0_#ffffff] active:shadow-[4px_4px_0_#ffffff] border-white":"shadow-[6px_6px_0_#000000] active:shadow-[4px_4px_0_#000000] border-black "} `}
          href="https://moda-online-shopping.vercel.app/"
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
          <img src="/moda.png" alt="" className={` ${darkMode?"border-white":"border-black"} border p-2`}  />
        </motion.div>
        <motion.div initial={{opacity:0,scale:0.7}} whileInView={{opacity:1,scale:1}} transition={{duration:2,ease:'easeOut'}}>
          <img src="/moda_mob_1.png" alt="" className="w-1/2 mx-auto md:mx-0 md:w-full" />
        </motion.div>
      </div>

        <motion.div initial={{y:"80%"}}
        whileInView={{y:0}}
        transition={{duration:1,ease:'easeOut'}} className="font-arsenica  md:text-4xl text-3xl font-semibold mx-auto flex justify-center items-center my-16" >
                Technologies Used
        </motion.div>
        <div className="my-16 flex flex-wrap md:flex-nowrap gap-3 md:gap-0 justify-center items-center " >
        <motion.button initial={{opacity:0,y:"80%"}}
        whileInView={{opacity:1,y:0}}
        transition={{duration:1,ease:'easeOut',delay:0.2}} className={`py-2 px-4 shadow-md no-underline border-2 ${darkMode?"border-white":"border-black" } font-dmsans font-semibold text-sm btn-primary focus:outline-none active:shadow-none mr-2`}>HTML</motion.button>
        <motion.button initial={{opacity:0,y:"80%"}}
        whileInView={{opacity:1,y:0}}
        transition={{duration:1,ease:'easeOut',delay:0.4}} className={`py-2 px-4 shadow-md no-underline border-2 ${darkMode?"border-white":"border-black" } font-dmsans font-semibold text-sm btn-primary focus:outline-none active:shadow-none mr-2`}>CSS</motion.button>
        <motion.button initial={{opacity:0,y:"80%"}}
        whileInView={{opacity:1,y:0}}
        transition={{duration:1,ease:'easeOut',delay:0.6}} className={`py-2 px-4 shadow-md no-underline border-2 ${darkMode?"border-white":"border-black" } font-dmsans font-semibold text-sm btn-primary focus:outline-none active:shadow-none mr-2`}>JavaScript</motion.button>
        <motion.button initial={{opacity:0,y:"80%"}}
        whileInView={{opacity:1,y:0}}
        transition={{duration:1,ease:'easeOut',delay:0.8}} className={`py-2 px-4 shadow-md no-underline border-2 ${darkMode?"border-white":"border-black" } font-dmsans font-semibold text-sm btn-primary focus:outline-none active:shadow-none mr-2`}>React.js</motion.button>
        <motion.button initial={{opacity:0,y:"80%"}}
        whileInView={{opacity:1,y:0}}
        transition={{duration:1,ease:'easeOut',delay:1}} className={`py-2 px-4 shadow-md no-underline border-2 ${darkMode?"border-white":"border-black" } font-dmsans font-semibold text-sm btn-primary focus:outline-none active:shadow-none mr-2`}>Next.js</motion.button>
        <motion.button initial={{opacity:0,y:"80%"}}
        whileInView={{opacity:1,y:0}}
        transition={{duration:1,ease:'easeOut',delay:1.2}} className={`py-2 px-4 shadow-md no-underline border-2 ${darkMode?"border-white":"border-black" } font-dmsans font-semibold text-sm btn-primary focus:outline-none active:shadow-none mr-2`}>Vercel</motion.button>
        <motion.button initial={{opacity:0,y:"80%"}}
        whileInView={{opacity:1,y:0}}
        transition={{duration:1,ease:'easeOut',delay:1.4}} className={`py-2 px-4 shadow-md no-underline border-2 ${darkMode?"border-white":"border-black" } font-dmsans font-semibold text-sm btn-primary focus:outline-none active:shadow-none mr-2`}>Sanity.io</motion.button>
        <motion.button initial={{opacity:0,y:"80%"}}
        whileInView={{opacity:1,y:0}}
        transition={{duration:1,ease:'easeOut',delay:1.6}} className={`py-2 px-4 shadow-md no-underline border-2 ${darkMode?"border-white":"border-black" } font-dmsans font-semibold text-sm btn-primary focus:outline-none active:shadow-none mr-2`}>Stripe</motion.button>
        </div>

        <motion.div initial={{y:"80%"}}
        whileInView={{y:0}}
        transition={{duration:1,ease:'easeOut'}} className="font-arsenica md:text-4xl text-3xl font-semibold mx-auto flex justify-center items-center my-16" >
                About The Project
        </motion.div>
        <motion.p initial={{opacity:0}}
        whileInView={{opacity:1}}
        transition={{duration:1,ease:'easeOut'}} className="font-dmsans font-medium md:w-1/2 w-3/4 mx-auto md:text-xl text-lg mt-12" >Moda Online Shopping is a streamlined e-commerce platform with a user-friendly UI, utilizing Next.js for frontend development, Sanity.io as a headless CMS for product management, and Stripe for secure payment processing.</motion.p>

        <motion.div initial={{y:"80%"}}
        whileInView={{y:0}}
        transition={{duration:1,ease:'easeOut'}} className="font-arsenica md:text-4xl text-3xl font-semibold mx-auto flex justify-center items-center my-16" >
                Salient Features 
        </motion.div>
        <ul className="flex flex-wrap md:flex-nowrap ml-[10%] md:ml-auto justify-between md:w-1/2 my-16 mx-auto" >
            <div>
            <motion.li initial={{opacity:0,x:"-30%"}} whileInView={{opacity:1,x:0}} transition={{ease:'easeOut',duration:2}}  className={`flex font-dmsans font-semibold items-center text-xl ${darkMode?"text-white":"text-black"}`}>
            {" "}
            <svg
              className={`md:w-12 md:h-12 w-8 h-8 me-2 ${darkMode?"text-white":"text-black"} m-2   flex-shrink-0`}
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
            </svg>
            Payment Gateway Integration
          </motion.li>
          <motion.li initial={{opacity:0,x:"-30%"}} whileInView={{opacity:1,x:0}} transition={{ease:'easeOut',duration:2,delay:0.1}}  className={`flex font-dmsans font-semibold items-center text-xl ${darkMode?"text-white":"text-black"}`}>
            {" "}
            <svg
              className={`md:w-12 md:h-12 w-8 h-8 me-2 ${darkMode?"text-white":"text-black"} m-2   flex-shrink-0`}
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
          <motion.li initial={{opacity:0,x:"-30%"}} whileInView={{opacity:1,x:0}} transition={{ease:'easeOut',duration:2,delay:0.2}}  className={`flex font-dmsans font-semibold items-center text-xl ${darkMode?"text-white":"text-black"}`}>
            {" "}
            <svg
              className={`md:w-12 md:h-12 w-8 h-8 me-2 ${darkMode?"text-white":"text-black"} m-2   flex-shrink-0`}
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
          <motion.li initial={{opacity:0,x:"-30%"}} whileInView={{opacity:1,x:0}} transition={{ease:'easeOut',duration:2,delay:0.3}}  className={`flex font-dmsans font-semibold items-center text-xl ${darkMode?"text-white":"text-black"}`}>
            {" "}
            <svg
              className={`md:w-12 md:h-12 w-8 h-8 me-2 ${darkMode?"text-white":"text-black"} m-2   flex-shrink-0`}
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
            <motion.li initial={{opacity:0,x:"-30%"}} whileInView={{opacity:1,x:0}} transition={{ease:'easeOut',duration:2,delay:0.4}}  className={`flex font-dmsans font-semibold items-center text-xl ${darkMode?"text-white":"text-black"}`}>
            {" "}
            <svg
              className={`md:w-12 md:h-12 w-8 h-8 me-2 ${darkMode?"text-white":"text-black"} m-2   flex-shrink-0`}
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
            </svg>
            Safe and Secure
          </motion.li>
          <motion.li initial={{opacity:0,x:"-30%"}} whileInView={{opacity:1,x:0}} transition={{ease:'easeOut',duration:2,delay:0.5}}  className={`flex font-dmsans font-semibold items-center text-xl ${darkMode?"text-white":"text-black"}`}>
            {" "}
            <svg
              className={`md:w-12 md:h-12 w-8 h-8 me-2 ${darkMode?"text-white":"text-black"} m-2   flex-shrink-0`}
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
            </svg>
            Sleek Design
          </motion.li>
          <motion.li initial={{opacity:0,x:"-30%"}} whileInView={{opacity:1,x:0}} transition={{ease:'easeOut',duration:2,delay:0.6}}  className={`flex font-dmsans font-semibold items-center text-xl ${darkMode?"text-white":"text-black"}`}>
            {" "}
            <svg
              className={`md:w-12 md:h-12 w-8 h-8 me-2 ${darkMode?"text-white":"text-black"} m-2   flex-shrink-0`}
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
            </svg>
            Form Integration
          </motion.li>
          <motion.li initial={{opacity:0,x:"-30%"}} whileInView={{opacity:1,x:0}} transition={{ease:'easeOut',duration:2,delay:0.7}}  className={`flex font-dmsans font-semibold items-center text-xl ${darkMode?"text-white":"text-black"}`}>
            {" "}
            <svg
              className={`md:w-12 md:h-12 w-8 h-8 me-2 ${darkMode?"text-white":"text-black"} m-2   flex-shrink-0`}
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
            </svg>
            Business Dashboard
          </motion.li>
            </div>
        </ul>

        <div className="flex flex-wrap md:flex-nowrap gap-10 md:w-3/4 w-[90%] mx-auto mt-12 justify-between items-center">
        <motion.div initial={{opacity:0,scale:0.7}} whileInView={{opacity:1,scale:1}} transition={{duration:2,ease:'easeOut'}} className="shadow-xl ">
          <img src="/modashop.png" alt="" className={` ${darkMode?"border-white":"border-black"} border p-2`} />
        </motion.div>
        <motion.div initial={{opacity:0,scale:0.7}} whileInView={{opacity:1,scale:1}} transition={{duration:2,ease:'easeOut'}}>
          <img src="/moda_mob_2.png" alt="" className="w-1/2 mx-auto md:w-full md:mx-0" />
        </motion.div>
      </div>

    <div className="py-16 font-arsenica font-semibold text-xl flex justify-center items-center" >

    <a
          className={`font-dmsans font-medium text-lg border-2 active:translate-x-[2px] active:translate-y-[2px] px-4 py-2 cursor-pointer ${darkMode?"shadow-[6px_6px_0_#ffffff] active:shadow-[4px_4px_0_#ffffff] border-white":"shadow-[6px_6px_0_#000000] active:shadow-[4px_4px_0_#000000] border-black "} `} href="/"
        >
          <button className="flex items-center">
            <IoIosArrowBack className="mr-2" /> Go back home
          </button>
        </a>

    </div>
    <Scroll/>
    <Footer darkMode={darkMode} />
    </div>
    </>
  );
};

export default ModaOnlineShopping;
