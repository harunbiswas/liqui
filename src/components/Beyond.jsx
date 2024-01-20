import { FaPlus } from 'react-icons/fa6'
import img2 from '../assets/images/Crypto_Photo_1-1.webp'
import img1 from '../assets/images/Pepe-Coin-1.webp'
import Title from './basic/Title'
import VideoPlayer from './basic/VideoPlayer'
const video =
  'https://player.vimeo.com/video/881057694?badge=0&autopause=0&autoplay=1&loop=1&title=0&byline=0&portrait=0&controls=0'

export default function Beyond() {
  return (
    <section className='beyond'>
      <div className='container-full'>
        <Title title={'Beyond the Hype, Into the Horizon'} />
        <div className='beyond-content'>
          <div className='beyond-content-video'>
            <VideoPlayer />
          </div>
          <div className='beyond-content-text'>
            <Title title={'Liquid Invest'} />

            <p>
              Embark on a transformative journey with Liquid Invest, where the
              era of fleeting trends and unfulfilled promises in the crypto
              space takes a back seat. Step away from the rollercoaster ride of
              shiba, pepe, and moon coins, where the specter of FOMO looms large
              and too often culminates in the disappointment of rug pulls and
              dashed investor hopes.
            </p>
          </div>
        </div>
      </div>
      <div className='container'>
        <div className='beyond-coin-wrp'>
          <div className='beyond-coin-item'>
            <p>
              Pepe Coin has lost more than 60% of its value since its ATH's of
              this year.
            </p>
            <span>
              <FaPlus />
            </span>
            <img className='img1' src={img1} alt='' />
          </div>
          <div className='beyond-coin-item'>
            <p>
              Dodgecoin; Has lost over -90.71% of value since ATH's of 71 cents.
            </p>
            <span>
              <FaPlus />
            </span>
            <img className='img2' src={img2} alt='' />
          </div>
        </div>
      </div>
    </section>
  )
}
