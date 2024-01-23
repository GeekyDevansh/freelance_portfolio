import React from 'react';

const Navbar = ({darkMode, setDarkmode}) => {

    const handleClick = ()=>{
setDarkmode(!darkMode);


    }

  return (
    <>
        <div className={`${darkMode?"bg-black":"bg-white"} flex items-center justify-end overflow-x-hidden `} >
          <div className=' logo px-4 md:fixed absolute md:top-0 top-2 md:left-0 left-0 z-30 md:w-40 w-28 ' >
       {darkMode? <img src="/dk_logo_dark.png" alt="" /> : <img src="/dk_logo_light.png" alt="" /> }
          </div>
        </div>
        <div className={`${darkMode?"bg-black":"bg-white"} flex items-center justify-end overflow-x-hidden `} >
          <div className={` ${darkMode?"text-white":"text-black"} px-4 fixed md:top-11 md:block hidden font-semibold font-arsenica right-20 z-30`} >
            {darkMode?"Dark":"Light"} theme :
          </div>
          <div className='px-4 fixed md:top-10 top-5 md:right-8 right-2 z-30 ' >
        <input id="toggle" className="toggle" type="checkbox" onClick={handleClick} />
          </div>
        </div>
    </>
  )
}

export default Navbar