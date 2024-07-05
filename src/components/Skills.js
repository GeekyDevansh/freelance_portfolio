import React from "react";
import { motion } from "framer-motion";

const Skills = ({ darkMode }) => {
  return (
    <>
      <div
        className={` ${
          darkMode ? "bg-black" : "bg-white"
        } flex flex-col justify-center items-center py-12 `}
      >
        <motion.div
          initial={{ opacity:0,y: "80%" }}
          whileInView={{ opacity:1,y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className={` ${
            darkMode ? "text-white" : "text-black"
          } tracking-widest md:text-5xl text-4xl w-[90%] text-center `}
        >
          WHAT I CAN DO
        </motion.div>

        <div className={`border-2 rounded-2xl mx-auto ${darkMode?"border-white shadow-[6px_6px_0_#ffffff]":"border-black shadow-[6px_6px_0_#000000]"} md:w-[60%] w-[90%] mt-12  pb-10 md:pb-0 `} >

        <ul className="flex flex-wrap md:flex-nowrap md:ml-0 ml-[10%] md:justify-center items-center md:gap-20 md:my-10 mt-10">
          <div>
            <motion.li
              initial={{ opacity: 0, x: "-30%" }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ ease: "easeOut", duration: 2 }}
              className={`flex font-arsenica font-semibold items-center md:md:text-xl text-lg ${
                darkMode ? "text-white" : "text-black"
              }`}
            >
              {" "}
              <svg
                className={`md:w-12 md:h-12 w-10 h-10 me-2 ${
                  darkMode ? "text-white" : "text-black"
                } m-2   flex-shrink-0`}
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
              </svg>
              <div>Website design</div>
            </motion.li>
            <motion.li
              initial={{ opacity: 0, x: "-30%" }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ ease: "easeOut", duration: 2, delay: 0.1 }}
              className={`flex font-arsenica font-semibold items-center md:text-xl text-lg ${
                darkMode ? "text-white" : "text-black"
              }`}
            >
              {" "}
              <svg
                className={`md:w-12 md:h-12 w-10 h-10 me-2 ${
                  darkMode ? "text-white" : "text-black"
                } m-2   flex-shrink-0`}
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
              </svg>
              <div>Website Development</div>
            </motion.li>
            <motion.li
              initial={{ opacity: 0, x: "-30%" }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ ease: "easeOut", duration: 2, delay: 0.2 }}
              className={`flex font-arsenica font-semibold items-center md:text-xl text-lg ${
                darkMode ? "text-white" : "text-black"
              }`}
            >
              {" "}
              <svg
                className={`md:w-12 md:h-12 w-10 h-10 me-2 ${
                  darkMode ? "text-white" : "text-black"
                } m-2   flex-shrink-0`}
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
              </svg>
              Search Engine Optimization
            </motion.li>
            <motion.li
              initial={{ opacity: 0, x: "-30%" }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ ease: "easeOut", duration: 2, delay: 0.3 }}
              className={`flex font-arsenica font-semibold items-center md:text-xl text-lg ${
                darkMode ? "text-white" : "text-black"
              }`}
            >
              {" "}
              <svg
                className={`md:w-12 md:h-12 w-10 h-10 me-2 ${
                  darkMode ? "text-white" : "text-black"
                } m-2   flex-shrink-0`}
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
              </svg>
              Performance Improvement
            </motion.li>
          </div>
          <div>
            <motion.li
              initial={{ opacity: 0, x: "-30%" }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ ease: "easeOut", duration: 2,delay:0.4 }}
              className={`flex font-arsenica font-semibold items-center md:text-xl text-lg ${
                darkMode ? "text-white" : "text-black"
              }`}
            >
              {" "}
              <svg
                className={`md:w-12 md:h-12 w-10 h-10 me-2 ${
                  darkMode ? "text-white" : "text-black"
                } m-2   flex-shrink-0`}
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
              </svg>
              Landing Page
            </motion.li>
            <motion.li
              initial={{ opacity: 0, x: "-30%" }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ ease: "easeOut", duration: 2, delay: 0.5 }}
              className={`flex font-arsenica font-semibold items-center md:text-xl text-lg ${
                darkMode ? "text-white" : "text-black"
              }`}
            >
              {" "}
              <svg
                className={`md:w-12 md:h-12 w-10 h-10 me-2 ${
                  darkMode ? "text-white" : "text-black"
                } m-2   flex-shrink-0`}
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
              </svg>
              Blogs
            </motion.li>
            <motion.li
              initial={{ opacity: 0, x: "-30%" }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ ease: "easeOut", duration: 2, delay: 0.6 }}
              className={`flex font-arsenica font-semibold items-center md:text-xl text-lg ${
                darkMode ? "text-white" : "text-black"
              }`}
            >
              {" "}
              <svg
                className={`md:w-12 md:h-12 w-10 h-10 me-2 ${
                  darkMode ? "text-white" : "text-black"
                } m-2   flex-shrink-0`}
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
              </svg>
              Portfolios
            </motion.li>
            <motion.li
              initial={{ opacity: 0, x: "-30%" }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ ease: "easeOut", duration: 2, delay: 0.7 }}
              className={`flex font-arsenica font-semibold items-center md:text-xl text-lg ${
                darkMode ? "text-white" : "text-black"
              }`}
            >
              {" "}
              <svg
                className={`md:w-12 md:h-12 w-10 h-10 me-2 ${
                  darkMode ? "text-white" : "text-black"
                } m-2   flex-shrink-0`}
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
              </svg>
              E-Commerce
            </motion.li>
          </div>
        </ul>

        </div>

      
      </div>
    </>
  );
};

export default Skills;
