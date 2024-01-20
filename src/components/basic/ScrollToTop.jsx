import { useEffect, useRef } from 'react'
import { FaPhoneFlip } from 'react-icons/fa6'
import { IoIosArrowUp } from 'react-icons/io'

export default function ScrollToTop() {
  const ref = useRef(null)
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      //   behavior: 'smooth', // Use smooth scrolling if available
    })
  }

  useEffect(() => {
    const handleScroll = () => {
      // Check if the user has scrolled 200 pixels or more
      if (window.scrollY <= 500) {
        ref.current.classList.add('hide')
      } else {
        ref.current.classList.remove('hide')
      }
    }

    // Attach the scroll event listener
    window.addEventListener('scroll', handleScroll)

    // Detach the scroll event listener when the component is unmounted
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <div className='scroll-to-top'>
      <a href='tel:123456789'>
        <FaPhoneFlip />
      </a>{' '}
      <button ref={ref} onClick={scrollToTop}>
        <IoIosArrowUp />
      </button>
    </div>
  )
}
