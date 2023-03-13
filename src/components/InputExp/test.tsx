import { render, screen } from '@testing-library/react'

import InputExp from '.'

describe('<InputExp />', () => {
  it('should render the heading', () => {
    const { container } = render(<InputExp />)

    expect(screen.getByRole('heading', { name: /InputExp/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
