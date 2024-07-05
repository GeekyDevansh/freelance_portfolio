import React,{useRef} from 'react';
import {motion, useScroll, useTransform} from 'framer-motion';

const Testimonials = ({darkMode}) => {

  return (
    <>

<div className={` ${darkMode?"bg-black":"bg-white"} flex flex-col justify-center items-center py-12 `}>
<motion.div initial={{opacity:0,y:"80%"}}
        whileInView={{opacity:1,y:0}}
        transition={{duration:1,ease:'easeOut'}} className={` ${darkMode?"text-white":"text-black"} tracking-widest md:text-5xl text-4xl text-center w-[90%]`} >
        TESTIMONIALS
    </motion.div>
    <motion.div initial={{opacity:0,y:"80%"}}
        whileInView={{opacity:1,y:0}}
        transition={{duration:1,ease:'easeOut',delay:0.1}} className={` ${darkMode?"text-white bg-black":"text-black bg-white"} font-arsenica font-semibold md:text-xl text-lg pt-4`} >
        Hear what my clients have to say.
    </motion.div>
        <section className="text-gray-600 body-font md:w-[60%] w-[90%] ">
  <div className=" w-full container px-5 md:py-24 py-12 mx-auto">
    <div className="flex flex-wrap md:flex-nowrap gap-8 -m-4">
      <motion.div initial={{scale:0.5,opacity:0}} whileInView={{scale:1,opacity:1}} transition={{duration:1}} className={`lg:w-1/2 lg:mb-0 mb-6 p-4 border-2 ${darkMode?"border-white shadow-[6px_6px_0_#ffffff]":"border-black shadow-[6px_6px_0_#000000]"} ${darkMode?"text-gray-400":"text-gray-700"} rounded-2xl `}>
        <div className="h-full text-center">
          <img alt="testimonial" className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src="/sanidhya1.webp"/>
          <p className="leading-relaxed">"Devansh excels in website design, development and SEO services, crafting flawless websites. Trust him for freelance work; he's a top professional in these areas, ensuring reliable and comprehensive services."</p>
          <span className={`inline-block h-1 w-10 rounded ${darkMode?"bg-gray-200":"bg-gray-900"} mt-6 mb-4`}></span>
          <h2 className={`${darkMode?"text-white":"text-gray-900"} font-medium title-font tracking-wider text-sm italic`}>Sanidhya Sharma</h2>
        </div>
      </motion.div>
      <motion.div initial={{scale:0.5,opacity:0}} whileInView={{scale:1,opacity:1}} transition={{duration:1}} className={`lg:w-1/2 lg:mb-0 mb-6 p-4 border-2 rounded-2xl ${darkMode?"border-white shadow-[6px_6px_0_#ffffff]":"border-black shadow-[6px_6px_0_#000000]"} ${darkMode?"text-gray-400":"text-gray-700"} `}>
        <div className="h-full text-center">
          <img alt="testimonial" className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src="/anuj.webp"/>
          <p className="leading-relaxed">"Devansh seamlessly integrates top-tier web development, stunning design, and effective SEO. His work exceeds expectations, making him highly recommended for web development, design, and SEO."</p>
          <span className={`inline-block h-1 w-10 rounded ${darkMode?"bg-gray-200":"bg-gray-900"} mt-6 mb-4`}></span>
           <h2 className={`${darkMode?"text-white":"text-gray-900"} font-medium title-font tracking-wider text-sm italic`}>Anuj Kumar Singh</h2>
          
        </div>
      </motion.div>
    </div>
  </div>
</section>
</div>
    </>
  )
}

export default Testimonials