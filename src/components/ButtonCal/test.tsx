import { render, screen } from '@testing-library/react'

import ButtonCal from '.'

describe('<ButtonCal />', () => {
  it('should render the heading', () => {
    const { container } = render(<ButtonCal />)

    expect(screen.getByRole('heading', { name: /ButtonCal/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
