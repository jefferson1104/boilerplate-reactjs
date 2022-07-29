import { ThemeProvider } from 'styled-components'
import { GlobalStyles } from './globalStyles'
import { theme } from './theme'

export const MyThemeProvider = ({ children }: React.PropsWithChildren) => {
  return (
    <ThemeProvider theme={theme}>
      {children}
      <GlobalStyles />
    </ThemeProvider>
  )
}
