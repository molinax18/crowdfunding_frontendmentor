import { useState } from 'react'
import style from '../styles/Header.module.css'
import NavMobile from './NavMobile'

const Header = () => {
  const { header, navDesktop, navDesktopContent } = style
  const [menu, setMenu] = useState(false)
  const toggleMenu = () => setMenu(!menu)

  return (
    <header className={header}>
      <img
        src='./images/logo.svg'
        alt='Crowdfund logo'
      />

      <NavMobile
        showMenu={menu}
        toggleMenu={toggleMenu}
      />

      <nav className={navDesktop}>
        <ul className={navDesktopContent}>
          <li>
            <a href='#'>About</a>
          </li>
          <li>
            <a href='#'>Discover</a>
          </li>
          <li>
            <a href='#'>Get Started</a>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
