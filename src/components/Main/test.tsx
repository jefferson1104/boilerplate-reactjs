import { render, screen } from '@testing-library/react'

import Main from '../Main'

test('Renders main page correctly', () => {
  render(<Main />)

  const heading = screen.getByRole('heading', { name: /boilerplate reactjs/i })

  expect(heading).toBeInTheDocument()
})
