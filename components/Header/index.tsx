import { mockMenu } from '@/data/mocks'
import Link from 'next/link'
import Account from '../ui/Icons/Account'
import Cart from '../ui/Icons/Cart'
import Search from '../ui/Icons/Search'
import Logo from '../ui/Logo'
import styles from './Header.module.css'
import MenuButton from './MenuButton'
import MenuLink from './MenuLink'
import Hamburger from '../ui/Icons/Hamburger'

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <nav className={styles.nav}>
          <ul className={styles.menu}>
            {mockMenu.map((item) => (
              <MenuLink key={item.id} href={item.link} name={item.name} />
            ))}
          </ul>

          <MenuButton
            icon={<Hamburger />}
            ariaLabel="Open mobile menu"
            className="hamburger"
          />
        </nav>

        <div className={styles.logo}>
          <Link href="/" tabIndex={0} aria-label="Home">
            <Logo />
          </Link>
        </div>

        <div className={styles.headerActions}>
          <MenuButton icon={<Search />} ariaLabel="Search" className="search" />
          <MenuButton
            icon={<Account />}
            ariaLabel="Account"
            className="account"
          />
          <MenuButton icon={<Cart />} ariaLabel="Cart" />
        </div>
      </div>
    </header>
  )
}

export default Header
