import React from "react";
import { TfiArrowTopRight } from "react-icons/tfi";
import { IoIosArrowBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";

const RaktBank = ({darkMode}) => {

    const Navigate = useNavigate();

  return (
    <>
       <div className="mx-auto md:w-3/4 flex flex-col md:flex-row gap-4 md:gap-0 justify-between mt-[5%] items-center font-arsenica font-semibold md:text-5xl text-3xl">
        <div>RaktBank</div>
        <a
          className="font-dmsans font-medium text-lg border-2 border-black active:translate-x-[2px] active:translate-y-[2px] active:shadow-[4px_4px_0_#000000] px-4 py-2 shadow-[6px_6px_0_#000000]"
          href="https://raktbank.netlify.app/"
          target="_blank"
          rel="noreferrer noopener"
        >
          <button className="flex items-center">
            Check It Out <TfiArrowTopRight className="mt-1 ml-1" />
          </button>
        </a>
      </div>
      <div className="flex flex-wrap md:flex-nowrap gap-10 w-3/4 mx-auto my-16 justify-between items-center">
        <div>
          <img src="/raktbank.png" alt=""className="border-black border p-2"  />
        </div>
        <div>
          <img src="/rakt_mob_1.png" alt=""  className="w-1/2 md:w-full mx-auto md:mx-0" />
        </div>
      </div>

        <div className="font-arsenica md:text-4xl text-3xl font-semibold mx-auto flex justify-center items-center my-16" >
                Technologies Used
        </div>
        <div className="my-16 flex flex-wrap md:flex-nowrap gap-3 md:gap-0 justify-center items-center " >
        <button class="py-2 px-4 shadow-md no-underline border-2 border-black font-dmsans font-semibold text-sm btn-primary focus:outline-none active:shadow-none mr-2">HTML</button>
        <button class="py-2 px-4 shadow-md no-underline border-2 border-black font-dmsans font-semibold text-sm btn-primary focus:outline-none active:shadow-none mr-2">CSS</button>
        <button class="py-2 px-4 shadow-md no-underline border-2 border-black font-dmsans font-semibold text-sm btn-primary focus:outline-none active:shadow-none mr-2">JavaScript</button>
        <button class="py-2 px-4 shadow-md no-underline border-2 border-black font-dmsans font-semibold text-sm btn-primary focus:outline-none active:shadow-none mr-2">React.js</button>
        <button class="py-2 px-4 shadow-md no-underline border-2 border-black font-dmsans font-semibold text-sm btn-primary focus:outline-none active:shadow-none mr-2">Netlify</button>
        <button class="py-2 px-4 shadow-md no-underline border-2 border-black font-dmsans font-semibold text-sm btn-primary focus:outline-none active:shadow-none mr-2">Google Form</button>
        <button class="py-2 px-4 shadow-md no-underline border-2 border-black font-dmsans font-semibold text-sm btn-primary focus:outline-none active:shadow-none mr-2">Firebase</button>
        </div>

        <div className="font-arsenica  md:text-4xl text-3xl font-semibold mx-auto flex justify-center items-center my-16" >
                About The Project
        </div>
        <p className="font-dmsans w-1/2 mx-auto md:text-xl text-lg mt-12" >RaktBank is an accessible online portal tailored for people with dyslexia, facilitating seamless connections between blood donors and patients. Its user-friendly design ensures a smooth experience for both contributors and recipients in the vital process of blood donation.</p>

        <div className="font-arsenica md:text-4xl text-3xl font-semibold mx-auto flex justify-center items-center my-16" >
                Salient Features 
        </div>
        <ul className="flex flex-wrap md:flex-nowrap ml-[15%] md:ml-auto justify-between md:w-1/2 my-16 mx-auto" >
            <div>
          <li className={`flex font-dmsans font-semibold items-center text-xl ${darkMode?"text-white":"text-black"}`}>
            {" "}
            <svg
              class={`md:w-12 md:h-12 w-8 h-8 me-2 ${darkMode?"text-white":"text-black"} m-2 dark:text-green-400 flex-shrink-0`}
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
          </li>
          <li className={`flex font-dmsans font-semibold items-center text-xl ${darkMode?"text-white":"text-black"}`}>
            {" "}
            <svg
              class={`md:w-12 md:h-12 w-8 h-8 me-2 ${darkMode?"text-white":"text-black"} m-2 dark:text-green-400 flex-shrink-0`}
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
          </li>
          <li className={`flex font-dmsans font-semibold items-center text-xl ${darkMode?"text-white":"text-black"}`}>
            {" "}
            <svg
              class={`md:w-12 md:h-12 w-8 h-8 me-2 ${darkMode?"text-white":"text-black"} m-2 dark:text-green-400 flex-shrink-0`}
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
            </svg>
            Fast Performance
          </li>
            </div>
            <div>
            <li className={`flex font-dmsans font-semibold items-center text-xl ${darkMode?"text-white":"text-black"}`}>
            {" "}
            <svg
              class={`md:w-12 md:h-12 w-8 h-8 me-2 ${darkMode?"text-white":"text-black"} m-2 dark:text-green-400 flex-shrink-0`}
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
            </svg>
            Safe and Secure
          </li>
          <li className={`flex font-dmsans font-semibold items-center text-xl ${darkMode?"text-white":"text-black"}`}>
            {" "}
            <svg
              class={`md:w-12 md:h-12 w-8 h-8 me-2 ${darkMode?"text-white":"text-black"} m-2 dark:text-green-400 flex-shrink-0`}
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
            </svg>
            Sleek Design
          </li>
          <li className={`flex font-dmsans font-semibold items-center text-xl ${darkMode?"text-white":"text-black"}`}>
            {" "}
            <svg
              class={`md:w-12 md:h-12 w-8 h-8 me-2 ${darkMode?"text-white":"text-black"} m-2 dark:text-green-400 flex-shrink-0`}
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
            </svg>
            Form Integration
          </li>
            </div>
        </ul>

        <div className="flex flex-wrap md:flex-nowrap gap-10 w-3/4 mx-auto mt-12 justify-between items-center">
        <div className="shadow-xl ">
          <img src="/rakt.png" alt="" className="border-black border p-2" />
        </div>
        <div>
          <img src="/rakt_mob_2.png" alt="" className="w-1/2 mx-auto md:w-full md:mx-0" />
        </div>
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

    </>
  );
};

export default RaktBank;
