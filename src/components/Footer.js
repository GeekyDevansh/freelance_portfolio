import React from 'react';
import { motion } from 'framer-motion';

const Footer = ({darkMode}) => {
  return (
    <>
    <footer  class={`text-gray-600 body-font ${darkMode?"bg-black":"bg-white"} `}>
  <div class="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
    <a class="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
      <motion.p initial={{opacity:0}}
        whileInView={{opacity:1}}
        transition={{duration:1,ease:'easeOut'}} className={`font-arsenica font-semibold text-xl ${darkMode?"text-white":"text-black"} `} >Devansh Khullar</motion.p>
    </a>
    <p class="text-sm flex text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4"> 
    
    <motion.a initial={{opacity:0}}
        whileInView={{opacity:1}}
        transition={{duration:1,ease:'easeOut'}} class="text-gray-400 cursor-pointer hover:underline underline-offset-8 " href="mailto:devanshkhullar11@gmail.com"  >
       devanshkhullar11@gmail.com
      </motion.a>
      <motion.a initial={{opacity:0}}
        whileInView={{opacity:1}}
        transition={{duration:1,ease:'easeOut'}} class="ml-3 text-gray-400 cursor-pointer" href="https://www.linkedin.com/in/devansh-khullar/" target='_blank' rel='noopener noreferrer' >
        <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="0" class="w-5 h-5" viewBox="0 0 24 24">
          <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
          <circle cx="4" cy="4" r="2" stroke="none"></circle>
        </svg>
      </motion.a>
    
    
    </p>
    <motion.span initial={{opacity:0}}
        whileInView={{opacity:1}}
        transition={{duration:1,ease:'easeOut'}} class="text-gray-400 inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
    © Copyright 2024. All Rights Reserved.
    </motion.span>
  </div>
</footer>
    </>
  )
}

export default Footer