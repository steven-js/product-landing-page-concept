import clsx from 'clsx'
import { FC, ReactNode } from 'react'
import styles from './MenuButton.module.css'

type MenuButtonProps = {
  icon: ReactNode
  ariaLabel: string
  className?: string
}

const MenuButton: FC<MenuButtonProps> = ({ icon, ariaLabel, className }) => (
  <button
    className={clsx(styles.icon, className && styles[className])}
    role="button"
    tabIndex={0}
    aria-label={ariaLabel}
  >
    {icon}
  </button>
)

export default MenuButton
