import { ButtonVariant } from '@/enums'
import clsx from 'clsx'
import styles from './Button.module.css'

type ButtonProps = {
  text: string
  variant?: ButtonVariant
  className?: string
}

const Button = ({
  text,
  variant = ButtonVariant.PRIMARY,
  className,
}: ButtonProps) => {
  return (
    <div className={styles.buttonContainer}>
      <button
        className={clsx(
          styles.button,
          variant && styles[variant],
          className && styles[className],
        )}
        tabIndex={0}
      >
        {text}
      </button>
    </div>
  )
}

export default Button
