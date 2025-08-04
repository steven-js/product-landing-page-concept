import clsx from 'clsx'
import styles from './RadioButton.module.css'

type RadioButtonProps = {
  text: string
  value: string
  name: string
  isChecked: boolean
  handleChange: (value: string) => void
  simpleButton?: boolean
}

const RadioButton = ({
  text,
  value,
  name,
  isChecked,
  handleChange,
  simpleButton = false,
}: RadioButtonProps) => {
  return (
    <label
      className={clsx('P2', styles.radioButton, {
        [styles.simpleButton]: simpleButton,
        [styles.checked]: isChecked,
      })}
      role="radio"
      aria-checked={isChecked}
      data-testid="radio-label"
    >
      <input
        type="radio"
        id={`radio-${value}`}
        name={name}
        value={value}
        checked={isChecked}
        onChange={() => handleChange(value)}
        className={styles.input}
        tabIndex={0}
      />
      <span className={styles.text}>{text}</span>
      <span
        className={clsx(styles.circle, {
          [styles.checkedCircle]: isChecked,
        })}
        data-testid="radio-circle"
      >
        {isChecked && <span className={styles.innerCircle} />}
      </span>
    </label>
  )
}

export default RadioButton
