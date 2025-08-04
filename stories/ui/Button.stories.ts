import Button from '@/components/ui/Button'
import { ButtonVariant } from '@/enums'
import { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof Button> = {
  title: 'ui/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    text: {
      control: { type: 'text' },
    },
    variant: {
      control: {
        type: 'select',
      },
      options: [ButtonVariant.PRIMARY, ButtonVariant.SECONDARY],
    },
  },
}
export default meta

type Story = StoryObj<typeof Button>

export const Default: Story = {
  args: {
    text: 'Click me',
  },
}

export const Primary: Story = {
  args: {
    text: 'Click me',
    variant: ButtonVariant.PRIMARY,
  },
}

export const Secondary: Story = {
  args: {
    text: 'Click me',
    variant: ButtonVariant.SECONDARY,
  },
}
