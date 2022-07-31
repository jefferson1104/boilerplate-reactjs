import * as Styled from './styles'
import reactLogo from '../../assets/react.svg'

export const Main = () => {
  return (
    <Styled.Wrapper>
      <Styled.Header>
        <img src="/vite.svg" className="logo" alt="Vite logo" />
        <img src={reactLogo} className="logo react" alt="React logo" />
      </Styled.Header>

      <Styled.Content>
        <h1>Boilerplate ReactJS</h1>

        <p>
          ViteJS - ReactJS - TypeScript - Styled Components - Jest - Storybook -
          ESLint - Prettier - Husky
        </p>
      </Styled.Content>

      <Styled.Footer>
        <a
          href="https://github.com/jefferson1104/boilerplate-reactjs"
          target="_blank"
          rel="noreferrer"
        >
          Source Code
        </a>
      </Styled.Footer>
    </Styled.Wrapper>
  )
}
