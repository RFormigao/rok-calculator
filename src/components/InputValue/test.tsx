import { render, screen } from '@testing-library/react'

import InputValue from '.'

describe('<InputValue />', () => {
  it('should render the heading', () => {
    const { container } = render(<InputValue />)

    expect(screen.getByRole('heading', { name: /InputValue/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
