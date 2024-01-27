import { useEffect, useState } from 'react';
import { BiArrowFromBottom } from 'react-icons/bi';


const Scroll = () => {
  return (
    <div className="fixed bottom-20 right-8">
      <a
        href='#home'
        className={`
        
          bg-[#006666] inline-flex items-center shadow-[6px_6px_0_#004d4d] active:translate-y-[2px] active:shadow-[4px_4px_0_#004d4d] active:translate-x-[2px] p-3 text-white transition-opacity focus:outline-none rounded-xl
        `}
      >
        <BiArrowFromBottom className="h-6 w-6" aria-hidden="true" />
      </a>
    </div>
  )
}

export default Scroll