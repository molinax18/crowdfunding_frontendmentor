import CloseMenuIcon from '../icons/CloseMenuIcon'
import HamburgerIcon from '../icons/HamburgerIcon'
import style from '../styles/Header.module.css'

interface Props {
  showMenu: boolean
  toggleMenu: () => void
}

const NavMobile = ({ showMenu, toggleMenu }: Props) => {
  const { navMobileContentWrapper, navMobileContent, navMobile } = style
  if (!showMenu) {
    return (
      <span className={navMobile}>
        <HamburgerIcon onClick={toggleMenu} />
      </span>
    )
  }

  return (
    <nav className={navMobile}>
      <CloseMenuIcon onClick={toggleMenu} />

      <div className={navMobileContentWrapper}>
        <ul className={`${navMobileContent} container`}>
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
      </div>
    </nav>
  )
}

export default NavMobile
