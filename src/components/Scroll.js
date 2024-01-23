import { useEffect, useState } from 'react';
import { BiArrowFromBottom } from 'react-icons/bi';


const Scroll = () => {
  const [isVisible, setIsVisible] = useState(false)

  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true)
    } else {
      setIsVisible(false)
    }
  }

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility)

    return () => {
      window.removeEventListener('scroll', toggleVisibility)
    }
  }, [])

  return (
    <div className="fixed bottom-20 right-8">
      <button
        type="button"
        onClick={scrollToTop}
        className={`
          ${isVisible ? 'opacity-100' : 'opacity-0'}
          bg-[#006666] inline-flex items-center shadow-[6px_6px_0_#004d4d] active:translate-y-[2px] active:shadow-[4px_4px_0_#004d4d] active:translate-x-[2px] p-3 text-white transition-opacity focus:outline-none rounded-xl
        `}
      >
        <BiArrowFromBottom className="h-6 w-6" aria-hidden="true" />
      </button>
    </div>
  )
}

export default Scroll