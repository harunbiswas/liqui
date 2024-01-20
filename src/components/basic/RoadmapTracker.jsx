import { useEffect, useRef } from 'react'
import { MdPlayArrow } from 'react-icons/md'

export default function RoadmapTracker({ data }) {
  const ref = useRef(null)
  const ref2 = useRef(null)
  useEffect(() => {
    const handleScroll = () => {
      const elementHeight = ref?.current?.parentNode.clientHeight
      const middleScreen = window.innerHeight / 2

      const balls = document.querySelectorAll('.midbollsdkfklsdf')

      if (ref.current) {
        const rect = ref.current.getBoundingClientRect()

        const elementOffsetTop = rect.top

        const upPosition =
          ((-elementOffsetTop + middleScreen) / elementHeight) * 100

        if (upPosition < 0) {
          ref.current.style.height = `${0}%`
        } else if (upPosition <= 100) {
          ref.current.style.height = `${upPosition}%`
        } else if (upPosition > 100) {
          ref.current.style.height = `${100}%`
        }

        // ball
        balls.forEach(item => {
          const rect2 = item.getBoundingClientRect()
          const elementOffsetTop2 = rect2.top

          const bollPosition =
            -elementOffsetTop2 + middleScreen + ref2.current.clientHeight / 2

          if (bollPosition > 0) {
            item.style.borderColor = '#c6fe1f'
          } else {
            item.style.borderColor = '#fff'
          }
        })
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [ref])
  return (
    <div className='roadmap-tracker'>
      <div className='line'>
        <div ref={ref} className='line-inner'></div>
      </div>
      {data?.map((item, i) => (
        <div
          key={i}
          className={`roadmap-tracker-item ${(i % 2 !== 0 && 'revers') || ''}`}
        >
          <div className='left'>
            <div className='top'>
              <img src={item?.img} alt='' />
              <MdPlayArrow />
            </div>

            <h4>Step {item?.id}</h4>
            {item?.text}
          </div>
          <div ref={ref2} className='mid midbollsdkfklsdf'>
            <span></span>
          </div>
          <div className='right'>
            <strong>Step {item?.id}</strong>
            <span>{item?.name}</span>
          </div>
        </div>
      ))}
    </div>
  )
}
