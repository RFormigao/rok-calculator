import { render, screen } from '@testing-library/react'

import InputAcc from '.'

describe('<InputAcc />', () => {
  it('should render the heading', () => {
    const { container } = render(<InputAcc />)

    expect(screen.getByRole('heading', { name: /InputAcc/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
