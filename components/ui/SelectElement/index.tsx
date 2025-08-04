'use client'

import Chevron from '@/components/ui/Icons/Chevron'
import clsx from 'clsx'
import { ChangeEvent, useState } from 'react'
import styles from './SelectElement.module.css'

type SelectElementProps = {
  label: string
  placeholder?: string
  options: {
    id: number
    name: string
  }[]
  disabled?: boolean
  handleChange?: (value: string | number) => void
}

const SelectElement = ({
  label,
  placeholder,
  options,
  disabled,
  handleChange,
}: SelectElementProps) => {
  const [selectedValue, setSelectedValue] = useState<number | string>('')

  const handleSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value
    setSelectedValue(value)

    if (handleChange) {
      handleChange(value)
    }
  }

  const isPlaceholderSelected = selectedValue === ''

  const sanitisedLabel = label
    .replace(/\s+/g, '-')
    .replace(/[^a-zA-Z0-9-]/g, '')
    .toLowerCase()

  return (
    <div
      className={clsx(
        styles.container,
        disabled && styles.disabled,
        placeholder && isPlaceholderSelected && styles.placeholderStyle,
      )}
    >
      <label
        htmlFor={`select-element-${sanitisedLabel}`}
        className={clsx('S2', styles.label)}
      >
        {label}
      </label>
      <div className={styles.selectWrapper}>
        <select
          id={`select-element-${sanitisedLabel}`}
          className={clsx('P1', styles.select)}
          value={selectedValue}
          onChange={handleSelectChange}
          aria-label={label}
          disabled={disabled}
        >
          {placeholder && (
            <option value="" disabled>
              {placeholder}
            </option>
          )}

          {options.map((option) => (
            <option key={option.id} value={option.name}>
              {option.name}
            </option>
          ))}
        </select>
        <span className={clsx(styles.icon, { [styles.disabled]: disabled })}>
          <Chevron />
        </span>
      </div>
    </div>
  )
}

export default SelectElement
