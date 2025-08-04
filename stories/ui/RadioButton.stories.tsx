import RadioButton from '@/components/ui/RadioButton'
import { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof RadioButton> = {
  title: 'ui/RadioButton',
  component: RadioButton,
  decorators: [
    (Story) => (
      <div style={{ width: '300px' }}>
        <Story />
      </div>
    ),
  ],
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    text: {
      control: { type: 'text' },
    },
    simpleButton: {
      control: { type: 'boolean' },
    },
    isChecked: {
      control: { type: 'boolean' },
    },
  },
}

export default meta

type Story = StoryObj<typeof RadioButton>

export const DefaultUnchecked: Story = {
  args: {
    text: 'Placeholder',
    value: 'placeholder',
    name: 'group1',
  },
}

export const DefaultChecked: Story = {
  args: {
    text: 'Checked Placeholder',
    value: 'checked-placeholder',
    name: 'group1',
    isChecked: true,
  },
}

export const SimpleRadioButtonUnchecked: Story = {
  args: {
    text: 'Placeholder',
    value: 'placeholder',
    simpleButton: true,
    name: 'group1',
  },
}
