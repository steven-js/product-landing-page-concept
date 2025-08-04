import RadioButton from '@/components/ui/RadioButton'

type RadioOption = {
  text: string
  value: string
}

type RadioGroupProps = {
  name: string
  options: RadioOption[]
  selectedValue: string
  onChange: (value: string) => void
}

const RadioGroup = ({
  name,
  options,
  selectedValue,
  onChange,
}: RadioGroupProps) => {
  return (
    <>
      {options.map((option) => (
        <RadioButton
          key={option.value}
          text={option.text}
          value={option.value}
          name={name}
          isChecked={selectedValue === option.value}
          handleChange={onChange}
        />
      ))}
    </>
  )
}

export default RadioGroup
