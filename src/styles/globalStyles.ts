import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
  }

  * {
    margin: 0;
    padding: 0;
    border: 0;
    text-decoration: none;
    list-style: none;
  }

  html {
    scroll-behavior: smooth;
  }

  html, body {
    height: 100%;
  }

  body {
    color: ${({ theme }) => theme.colors.primary};
    background: ${({ theme }) => theme.colors.secondary};
    font-family: sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`
