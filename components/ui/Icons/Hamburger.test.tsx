import { render } from '@testing-library/react'
import Hamburger from './Hamburger'

describe('Hamburger icon test', () => {
  it('should render the Hamburger icon unchanged', () => {
    const { container } = render(<Hamburger />)
    expect(container).toMatchSnapshot()
  })
})
