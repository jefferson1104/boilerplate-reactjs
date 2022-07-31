import { screen } from '@testing-library/react'
import { renderTheme } from '../../utils/renderTheme'

import { Main } from '../Main'

describe('Main Component', () => {
  it('should render correctly', () => {
    renderTheme(<Main />)

    const image = screen.getByAltText(/vite logo/i)
    const heading = screen.getByRole('heading', { name: /boilerplate/i })
    const technologies = screen.getByText(/vitejs - reactjs/i)
    const link = screen.getByRole('link', { name: /source code/i })

    expect(image).toBeInTheDocument()
    expect(heading).toBeInTheDocument()
    expect(technologies).toBeInTheDocument()
    expect(link).toBeInTheDocument()
  })
})
