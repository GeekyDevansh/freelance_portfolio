import React from 'react';
import {motion} from 'framer-motion';

const About = ({darkMode}) => {
  return (
    <>
    <div className={` ${darkMode?"bg-black":"bg-white"} flex flex-col justify-center items-center  `}>
    

    <motion.span  initial={{y:"80%"}}
        whileInView={{y:0}}
        transition={{duration:1,ease:'easeOut'}} className={` ${darkMode?"text-white":"text-black"} tracking-widest md:text-5xl text-4xl w-[90%] text-center`} >
        A LITTLE ABOUT ME
    </motion.span>
    <div className=''>
    <section className="text-gray-600 body-font">
  <div className="container px-5 py-12 mx-auto flex flex-wrap">
    <div className="flex relative pt-10 pb-20 sm:items-center md:w-2/3 mx-auto">
      <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
        <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
      </div>
      <div className="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-gray-900 text-white relative z-10 title-font font-medium text-sm">1</div>
      <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
        <motion.div  initial={{opacity:0}}
        whileInView={{opacity:1}}
        transition={{duration:1,ease:'easeOut'}} className="flex-shrink-0  md:w-24 md:h-24 w-20 h-20 text-gray-900 rounded-full inline-flex items-center justify-center">
       {darkMode?<img src="/darkComputer.svg" alt="" />:<img src="/computer.svg" alt="" />}
        </motion.div>
        <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
          <motion.h2  initial={{opacity:0,y:"50%"}}
        whileInView={{opacity:1,y:0}}
        transition={{duration:1,ease:'easeOut'}} className={`font-semibold font-arsenica ${darkMode?"text-white":"text-gray-900"} mb-1 text-xl`}>Experienced Freelance Web Developer & Designer:</motion.h2>
          <motion.p  initial={{opacity:0,y:"50%"}}
        whileInView={{opacity:1,y:0}}
        transition={{duration:1,ease:'easeOut',delay:0.1}} className={`${darkMode?"text-gray-400":"text-gray-600"} leading-relaxed`}>Based in India with over 3 years of experience, I specialize in crafting visually stunning websites and seamless user experiences. From web development to design, I bring a holistic approach to digital solutions.</motion.p>
        </div>
      </div>
    </div>
    <div className="flex relative pb-20 sm:items-center md:w-2/3 mx-auto">
      <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
        <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
      </div>
      <div className="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-gray-900 text-white relative z-10 title-font font-medium text-sm">2</div>
      <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
        <motion.div  initial={{opacity:0}}
        whileInView={{opacity:1}}
        transition={{duration:1,ease:'easeOut'}} className="flex-shrink-0   md:w-24 md:h-24 w-20 h-20 rounded-full inline-flex items-center justify-center">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128"><path d="M118.147 24.542 100.865 7.261c-14.302 5.559-32.461 14.922-47.679 30.14a232.209 232.209 0 0 0-7.042 7.351c-6.99 7.583-13.064 15.179-18.03 22.389l30.153 30.153c9.544-6.577 19.745-15.076 29.74-25.071 15.218-15.219 24.582-33.378 30.14-47.681zM82.204 43.204c-5.223-5.223-5.236-13.696-.013-18.919s13.709-5.223 18.932 0 5.21 13.696-.013 18.92-13.683 5.222-18.906-.001zM125.408 0s-7.686 1.315-18.881 5.184l13.696 13.696C124.092 7.686 125.408 0 125.408 0zM98.743 40.834c-3.915 3.915-10.257 3.915-14.172 0s-3.925-10.267-.01-14.182c3.915-3.915 10.276-3.915 14.192 0s3.906 10.266-.01 14.182zM2.592 67.205l29.456-29.456 11.762 4.669c-6.99 7.583-13.064 15.179-18.03 22.389L2.592 67.205zm57.967 32.379c7.209-4.965 14.805-11.04 22.389-18.03l4.669 11.762-29.457 29.457 2.399-23.189zM24.491 128l-3.869-3.869L50.5 94.253l3.869 3.869L24.491 128zM7.725 111.234l-3.869-3.869 29.878-29.878 3.869 3.869-29.878 29.878zm20.419-4.943-3.869-3.869 17.196-17.196 3.869 3.869-17.196 17.196zM13.958 92.105l-3.869-3.869L27.285 71.04l3.869 3.869-17.196 17.196z" fill={`${darkMode?"#ffffff":"#000000"}`}/></svg>
        </motion.div>
        <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
          <motion.h2 initial={{opacity:0,y:"50%"}}
        whileInView={{opacity:1,y:0}}
        transition={{duration:1,ease:'easeOut'}} className={`font-semibold font-arsenica ${darkMode?"text-white":"text-gray-900"} mb-1 text-xl`}>Cutting-Edge Technology Integration:</motion.h2>
          <motion.p  initial={{opacity:0,y:"50%"}}
        whileInView={{opacity:1,y:0}}
        transition={{duration:1,ease:'easeOut',delay:0.1}} className={`${darkMode?"text-gray-400":"text-gray-600"} leading-relaxed`}>I pride myself on integrating the latest technology into websites, ensuring not only aesthetic appeal but also a solid technological foundation. Additionally, I offer web designing expertise for a comprehensive user experience.</motion.p>
        </div>
      </div>
    </div>
    <div className="flex relative pb-20 sm:items-center md:w-2/3 mx-auto">
      <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
        <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
      </div>
      <div className="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-gray-900 text-white relative z-10 title-font font-medium text-sm">3</div>
      <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
      <motion.div  initial={{opacity:0}}
        whileInView={{opacity:1}}
        transition={{duration:1,ease:'easeOut'}} class="flex-shrink-0   md:w-24 md:h-24 w-20 h-20 bg-opacity-50 text-gray-900 rounded-full inline-flex items-center justify-center">
          {darkMode?<img src="/darkGlobe.svg" alt="" />:<img src="/globe.svg" alt="" />}
        </motion.div>
        <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
          <motion.h2 initial={{opacity:0,y:"50%"}}
        whileInView={{opacity:1,y:0}}
        transition={{duration:1,ease:'easeOut'}} className={`font-semibold font-arsenica ${darkMode?"text-white":"text-gray-900"} mb-1 text-xl`}>Diverse Web Solution Portfolio:</motion.h2>
          <motion.p  initial={{opacity:0,y:"50%"}}
        whileInView={{opacity:1,y:0}}
        transition={{duration:1,ease:'easeOut',delay:0.1}} className={`${darkMode?"text-gray-400":"text-gray-600"} leading-relaxed`}>My proficiency extends to creating various web solutions, including captivating landing pages, e-commerce platforms, portfolios and many more. This diversity showcases adaptability in delivering bespoke solutions.</motion.p>
        </div>
      </div>
    </div>
    <div className="flex relative pb-10 sm:items-center md:w-2/3 mx-auto">
      <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
        <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
      </div>
      <div className="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-gray-900 text-white relative z-10 title-font font-medium text-sm">4</div>
      <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
        <motion.div  initial={{opacity:0}}
        whileInView={{opacity:1}}
        transition={{duration:1,ease:'easeOut'}} className="flex-shrink-0   md:w-24 md:h-24 w-20 h-20 text-gray-900 rounded-full inline-flex items-center justify-center">
        {darkMode?<img src="/darkGraph.svg" alt="" />:<img src="/graph.svg" alt="" />}
        </motion.div>
        <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
          <motion.h2 initial={{opacity:0,y:"50%"}}
        whileInView={{opacity:1,y:0}}
        transition={{duration:1,ease:'easeOut'}} className={`font-semibold font-arsenica ${darkMode?"text-white":"text-gray-900"} mb-1 text-xl`}>SEO Optimization for Visibility:</motion.h2>
          <motion.p  initial={{opacity:0,y:"50%"}}
        whileInView={{opacity:1,y:0}}
        transition={{duration:1,ease:'easeOut',delay:0.1}} className={`${darkMode?"text-gray-400":"text-gray-600"} leading-relaxed`}>Beyond development and design, I specialize in SEO to enhance website visibility. This strategic approach ensures that the websites I build are not just visually appealing but also optimized for search engines.</motion.p>
        </div>
      </div>
    </div>
  </div>
</section>    
    </div>
    </div>
    
    </>
  )
}

export default About