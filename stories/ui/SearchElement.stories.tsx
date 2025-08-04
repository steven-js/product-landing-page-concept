import SelectElement from '@/components/ui/SelectElement'
import { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof SelectElement> = {
  title: 'ui/SelectElement',
  component: SelectElement,
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
    label: {
      control: { type: 'text' },
    },
    options: {
      control: { type: 'object' },
    },

    placeholder: {
      control: { type: 'text' },
    },
    disabled: {
      control: { type: 'boolean' },
    },
  },
}

export default meta

type Story = StoryObj<typeof SelectElement>

export const Default: Story = {
  args: {
    label: 'Select an option',
    options: [
      { id: 1, name: 'Option 1' },
      { id: 2, name: 'Option 2' },
      { id: 3, name: 'Option 3' },
    ],
  },
}

export const WithPlaceholder: Story = {
  args: {
    label: 'Select an option',
    options: [
      { id: 1, name: 'Option 1' },
      { id: 2, name: 'Option 2' },
      { id: 3, name: 'Option 3' },
    ],
    placeholder: 'Select an option',
  },
}

export const Disabled: Story = {
  args: {
    label: 'Select an option',
    options: [
      { id: 1, name: 'Option 1' },
      { id: 2, name: 'Option 2' },
      { id: 3, name: 'Option 3' },
    ],
    disabled: true,
  },
}
