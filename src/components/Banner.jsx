import img from '../assets/images/Crypto_Photo_4-1.webp'
import TitleColor from './basic/TitleColor'

export default function Banner() {
  return (
    <section className='banner' id='home'>
      <div className='container'>
        <div className='banner-content'>
          <TitleColor title={'Liquid Invest'} />
          <h1 className='banner-content-title'>
            The Next Generation Of Crypto Investing
          </h1>

          <h1 className='banner-content-title moving1'>
            <div className='stage'>
              <div className='cubespinner'>
                <div className='face1'>Real Opportunity</div>
                <div className='face2'>Elevate Your Portfolio</div>
                <div className='face3'>Real Opportunity</div>
                <div className='face4'>Elevate Your Portfolio</div>
              </div>
            </div>
          </h1>

          <a href='#uniswap' className='btn banner-content-btn'>
            Start Investing Now
          </a>
          <div className='banner-content-img'>
            <img src={img} alt='' />
          </div>
        </div>
      </div>
    </section>
  )
}
