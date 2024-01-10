import React from 'react'

const Navbar = ({darkMode, setDarkmode}) => {

    const handleClick = ()=>{
setDarkmode(!darkMode);


    }

  return (
    <>
        <div className={`${darkMode?"bg-black":"bg-white"} flex items-center justify-end overflow-x-hidden `} >
          <div className='px-4 fixed md:top-10 top-5 md:right-8 right-2 z-20 ' >
        <input id="toggle" class="toggle" type="checkbox" onClick={handleClick} />
          </div>
        </div>
    </>
  )
}

export default Navbar