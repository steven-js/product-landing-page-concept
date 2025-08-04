import { render } from '@testing-library/react'
import Search from './Search'

describe('Search icon test', () => {
  it('should render the Search icon unchanged', () => {
    const { container } = render(<Search />)
    expect(container).toMatchSnapshot()
  })
})
