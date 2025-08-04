import { render } from '@testing-library/react'
import Account from './Account'

describe('Account icon test', () => {
  it('should render the Account icon unchanged', () => {
    const { container } = render(<Account />)
    expect(container).toMatchSnapshot()
  })
})
