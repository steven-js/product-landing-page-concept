import { mockSubscriptionOptions } from '@/data/mocks'
import '@testing-library/jest-dom'
import { fireEvent, render, screen } from '@testing-library/react'
import { useState } from 'react'
import RadioGroup from './'

describe('RadioGroup Component test', () => {
  it('should toggle between radio buttons and update the selected value', () => {
    // Mock parent wrapper component to manage state
    const Wrapper = () => {
      const [selectedValue, setSelectedValue] = useState('subscription')
      return (
        <RadioGroup
          name="test-group"
          options={mockSubscriptionOptions}
          selectedValue={selectedValue}
          onChange={setSelectedValue}
        />
      )
    }

    // Render the wrapper
    render(<Wrapper />)

    const subscriptionRadio = screen.getByLabelText(/subscription/i)
    const oneOffRadio = screen.getByLabelText(/one-off/i)

    // Verify initial state ("Subscription" should be selected)
    expect(subscriptionRadio).toBeChecked()
    expect(oneOffRadio).not.toBeChecked()

    // Simulate clicking the "One-off" radio button
    fireEvent.click(oneOffRadio)

    // Verify the state updates ("One-off" is selected)
    expect(subscriptionRadio).not.toBeChecked()
    expect(oneOffRadio).toBeChecked()

    // Simulate clicking the "Subscription" radio button again
    fireEvent.click(subscriptionRadio)

    // Verify the state updates ("Subscription" is selected)
    expect(subscriptionRadio).toBeChecked()
    expect(oneOffRadio).not.toBeChecked()
  })
})
