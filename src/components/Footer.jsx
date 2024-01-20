import { BsFillSendFill } from 'react-icons/bs'
import { TbBrandDiscordFilled } from 'react-icons/tb'
import { VscTwitter } from 'react-icons/vsc'
import logo from '../assets/images/L-1.png'

export default function Footer() {
  return (
    <footer className='footer'>
      <div className='container'>
        <div className='footer-top'>
          <a href='/' className='brand'>
            <img src={logo} alt='' />
          </a>
          <ul className='menu'>
            <h5>Company</h5>
            <li>
              <a href='#overview'>About Us</a>
            </li>
            <li>
              <a href='#contact'>Contact Us</a>
            </li>
          </ul>
          <ul className='menu'>
            <h5>Product</h5>
            <li>
              <a
                target='blank'
                href='https://staging-b0b8-liquidinvest.wpcomstaging.com/wp-content/uploads/2023/12/white_paper-1.pdf'
              >
                White Paper
              </a>
            </li>
          </ul>
        </div>
        <div className='footer-social'>
          <h4>Join the community!</h4>
          <ul className='footer-social-menu'>
            <li>
              <a target='blank' href='https://twitter.com/liquidinvestio'>
                <VscTwitter />
              </a>
            </li>
            <li>
              <a target='blank' href='https://t.me/+W8TN0o13Nc45OTJh'>
                <BsFillSendFill />
              </a>
            </li>
            <li>
              <a target='blank' href='https://discord.com/invite/K2ZXu75Y'>
                <TbBrandDiscordFilled />
              </a>
            </li>
          </ul>
        </div>
        <div className='footer-bottom'>
          <p>&copy; 2024 Edited by Harun Biswas</p>
        </div>
      </div>
    </footer>
  )
}
