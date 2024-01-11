import React,{useRef} from 'react';
import {motion, useScroll, useTransform} from 'framer-motion';

const Testimonials = ({darkMode}) => {

  const ref=useRef(null);

  const {scrollYProgress}=useScroll({
    target:ref,
    offset:["0 1", "1.33 1"],
  });

  const scaleProgress  = useTransform(scrollYProgress,[0,1],[0.8,1]);
  const opacityProgress  = useTransform(scrollYProgress,[0,1],[0.6,1]);

  return (
    <>

<div className={` ${darkMode?"bg-black":"bg-white"} flex flex-col justify-center items-center py-12 `}>
<motion.div initial={{y:"80%"}}
        whileInView={{y:0}}
        transition={{duration:1,ease:'easeOut'}} className={` ${darkMode?"text-white":"text-black"} tracking-widest md:text-5xl text-4xl text-center w-[90%]`} >
        TESTIMONIALS
    </motion.div>
    <motion.div initial={{y:"80%"}}
        whileInView={{y:0}}
        transition={{duration:1,ease:'easeOut',delay:0.1}} className={` ${darkMode?"text-white bg-black":"text-black bg-white"} font-arsenica font-semibold md:text-xl text-lg pt-4`} >
        Hear what my clients have to say.
    </motion.div>
        <section class="text-gray-600 body-font md:w-[60%] w-[90%] ">
  <div class=" w-full container px-5 md:py-24 py-12 mx-auto">
    <div class="flex flex-wrap md:flex-nowrap gap-8 -m-4">
      <motion.div ref={ref} style={{
          scale:scaleProgress,
          opacity:opacityProgress,
        }} class={`lg:w-1/2 lg:mb-0 mb-6 p-4 border-2 ${darkMode?"border-white shadow-[10px_10px_0_#ffffff]":"border-black shadow-[10px_10px_0_#000000]"} `}>
        <div class="h-full text-center">
          <img alt="testimonial" class="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src="https://avatar.iran.liara.run/public/boy?username=Ashu"/>
          <p class="leading-relaxed">"Devansh is a pro in both web development and design. His creativity resulted in a flawless website. For a skilled and reliable freelancer, choose Devansh!"</p>
          <span class={`inline-block h-1 w-10 rounded ${darkMode?"bg-gray-200":"bg-gray-900"} mt-6 mb-4`}></span>
          <h2 class="text-gray-900 font-medium title-font tracking-wider text-sm">abc</h2>
          <p class="text-gray-500">xyz pvt ltd.</p>
        </div>
      </motion.div>
      <motion.div ref={ref} style={{
          scale:scaleProgress,
          opacity:opacityProgress,
        }} class={`lg:w-1/2 lg:mb-0 mb-6 p-4 border-2 ${darkMode?"border-white shadow-[10px_10px_0_#ffffff]":"border-black shadow-[10px_10px_0_#000000]"} `}>
        <div class="h-full text-center">
          <img alt="testimonial" class="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src="https://avatar.iran.liara.run/public/boy?username=Anuj"/>
          <p class="leading-relaxed">"Devansh seamlessly blends top-tier web development with impressive design skills. He delivered a visually stunning website, exceeding our expectations. I highly recommend Devansh for freelance web development and design."</p>
          <span class={`inline-block h-1 w-10 rounded ${darkMode?"bg-gray-200":"bg-gray-900"} mt-6 mb-4`}></span>
          <h2 class="text-gray-900 font-medium title-font tracking-wider text-sm">ABC</h2>
          <p class="text-gray-500">XYZ Pvt Ltd</p>
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