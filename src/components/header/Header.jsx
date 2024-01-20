import { useState } from 'react'
import { FaBarsStaggered } from 'react-icons/fa6'
import logo from '../../assets/images/L-1.png'

export default function Header() {
  const navItems = [
    {
      name: 'Home',
      url: '#home',
    },
    {
      name: 'Overview',
      url: '#overview',
    },
    {
      name: 'UNISWAP WIDGET',
      url: '#uniswap',
    },
    {
      name: 'Contact',
      url: '#contact',
    },
  ]
  const [active, setActive] = useState('#home')
  const [isToggle, setIsToggle] = useState(false)

  return (
    <header className='header ' id='home'>
      <div className='container'>
        <div className='header-wrp'>
          <a href='#home' className='header-brand'>
            <img src={logo} alt='' />
          </a>
          <nav className='header-nav'>
            <button
              onClick={() => {
                setIsToggle(!isToggle)
              }}
              className={`toggle ${(isToggle && 'active') || ''}`}
            >
              <FaBarsStaggered />
            </button>
            <ul className={`header-nav-items ${(isToggle && 'show') || ''}`}>
              {navItems?.map((item, i) => (
                <li key={i} className={`header-nav-item `}>
                  <a
                    className={` ${(item.url === active && 'active') || ''}`}
                    href={item?.url}
                    onClick={() => setIsToggle(false)}
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  )
}
