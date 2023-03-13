import { render, screen } from '@testing-library/react'

import InputAccAll from '.'

describe('<InputAccAll />', () => {
  it('should render the heading', () => {
    const { container } = render(<InputAccAll />)

    expect(screen.getByRole('heading', { name: /InputAccAll/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
