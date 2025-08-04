import Link from 'next/link'
import { FC } from 'react'
import styles from './MenuLink.module.css'

type MenuLinkProps = {
  href: string
  name: string
}

const MenuLink: FC<MenuLinkProps> = ({ href, name }) => {
  return (
    <li className={styles.menuItem}>
      <Link href={href} tabIndex={0} aria-label={name}>
        {name}
      </Link>
    </li>
  )
}

export default MenuLink
