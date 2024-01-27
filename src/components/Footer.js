import React from 'react';
import { motion } from 'framer-motion';

const Footer = ({darkMode}) => {
  return (
    <>
    <footer  className={`${darkMode?"text-gray-600":"text-gray-800"} body-font ${darkMode?"bg-black":"bg-white"} border-t border-gray-400 `}>
  <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
    <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
      <motion.p initial={{opacity:0}}
        whileInView={{opacity:1}}
        transition={{duration:1,ease:'easeOut'}} className={`font-arsenica font-semibold text-xl ${darkMode?"text-white":"text-black"} `} >Devansh Khullar</motion.p>
    </a>
    <p className={`text-sm flex ${darkMode?"text-gray-500":"text-gray-800"} sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4`}> 
    
    <motion.a initial={{opacity:0}}
        whileInView={{opacity:1}}
        transition={{duration:1,ease:'easeOut'}} className={`${darkMode?"text-gray-400":"text-gray-600"} cursor-pointer hover:underline underline-offset-8 `} href="mailto:devanshkhullar11@gmail.com"  >
       devanshkhullar11@gmail.com
      </motion.a>
      <motion.a initial={{opacity:0}}
        whileInView={{opacity:1}}
        transition={{duration:1,ease:'easeOut'}} className={`ml-3 ${darkMode?"text-gray-400":"text-gray-600"} cursor-pointer`} href="https://www.linkedin.com/in/devansh-khullar/" target='_blank' rel='noopener noreferrer' >
        <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0" className="w-5 h-5" viewBox="0 0 24 24">
          <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
          <circle cx="4" cy="4" r="2" stroke="none"></circle>
        </svg>
      </motion.a>
      <motion.a initial={{opacity:0}}
        whileInView={{opacity:1}}
        transition={{duration:1,ease:'easeOut'}} className={`ml-3 ${darkMode?"text-gray-400":"text-gray-600"} cursor-pointer`} href="https://github.com/GeekyDevansh" target='_blank' rel='noopener noreferrer' >
        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
    <path fillRule="evenodd" d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z" clipRule="evenodd"/>
  </svg>
      </motion.a>

      <motion.a initial={{opacity:0}}
        whileInView={{opacity:1}}
        transition={{duration:1,ease:'easeOut'}} className={`ml-3 ${darkMode?"text-gray-400":"text-gray-600"} cursor-pointer`} href="https://www.instagram.com/khullar_devansh/" target='_blank' rel='noopener noreferrer'>

      <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className=" w-5 h-5 bi bi-instagram" viewBox="0 0 16 16">
  <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334"/>
</svg>
      </motion.a>

      <motion.a initial={{opacity:0}}
        whileInView={{opacity:1}}
        transition={{duration:1,ease:'easeOut'}} className={`ml-3 ${darkMode?"text-gray-400":"text-gray-600"} cursor-pointer`} href="https://www.facebook.com/devansh.khullar.71" target='_blank' rel='noopener noreferrer'>

      <svg xmlns="http://www.w3.org/2000/svg" version="1.0" fill="currentColor" viewBox="0 0 50 50" className=" w-5 h-5 icon icons8-Facebook-Filled" >    <path d="M40,0H10C4.486,0,0,4.486,0,10v30c0,5.514,4.486,10,10,10h30c5.514,0,10-4.486,10-10V10C50,4.486,45.514,0,40,0z M39,17h-3 c-2.145,0-3,0.504-3,2v3h6l-1,6h-5v20h-7V28h-3v-6h3v-3c0-4.677,1.581-8,7-8c2.902,0,6,1,6,1V17z"/></svg>

      </motion.a>
    
    
    </p>
    <motion.span initial={{opacity:0}}
        whileInView={{opacity:1}}
        transition={{duration:1,ease:'easeOut'}} className={`${darkMode?"text-gray-400":"text-gray-600"} inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start`}>
    © Copyright 2024. All Rights Reserved.
    </motion.span>
  </div>
</footer>
    </>
  )
}

export default Footer