import { render } from '@testing-library/react'
import Cart from './Cart'

describe('Cart icon test', () => {
  it('should render the Cart icon unchanged', () => {
    const { container } = render(<Cart />)
    expect(container).toMatchSnapshot()
  })
})
