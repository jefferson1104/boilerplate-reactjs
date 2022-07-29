import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  max-width: 1280px;
  margin: 0 auto;
  padding: 0 2rem;
  height: 100vh;
`

export const Header = styled.header`
  img {
    height: 15em;
    padding: 1.5em;
    will-change: filter;

    &:hover {
      filter: drop-shadow(0 0 2em #646cffaa);
    }
  }

  ${media.lessThan('medium')`
    img {
      height: 8em;
    }
  `}
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  text-align: center;
  margin-top: 40px;

  h1 {
    font-size: 48px;
    font-weight: 700;
  }

  p {
    margin-top: 20px;
    font-size: 18px;
  }

  ${media.lessThan('medium')`
    h1 {
      font-size: 32px;
    }

    p {
      font-size: 14px;
      line-height: 1.5;
    }
  `}
`

export const Footer = styled.footer`
  ${({ theme }) => css`
    margin-top: 40px;

    a {
      font-size: 24px;
      font-weight: 700;
      color: ${theme.colors.primary};
      transition: all 0.5s ease-in-out;

      &:hover {
        letter-spacing: 1px;
        filter: brightness(5);
      }
    }

    ${media.lessThan('medium')`
      a {
        font-size: 18px;
      }
    `}
  `}
`
