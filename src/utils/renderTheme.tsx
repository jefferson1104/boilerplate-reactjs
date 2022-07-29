import { render } from '@testing-library/react'
import { ReactNode } from 'react'
import { MyThemeProvider } from '../styles/myThemeProvider'

export const renderTheme = (children: ReactNode) => {
  return render(<MyThemeProvider>{children}</MyThemeProvider>)
}
