import type { Preview } from '@storybook/react'
import '../app/globals.css'
import '../build/css/variables.css'

const preview: Preview = {
  parameters: {
    nextjs: {
      appDirectory: true,
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
}

export default preview
