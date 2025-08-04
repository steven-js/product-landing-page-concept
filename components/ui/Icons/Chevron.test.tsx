import { render } from '@testing-library/react'
import Chevron from './Chevron'

describe('Chevron icon test', () => {
  it('should render the Chevron icon unchanged', () => {
    const { container } = render(<Chevron />)
    expect(container).toMatchSnapshot()
  })
})
