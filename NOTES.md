## VITE REACT TYPESCRIPT
Create your reactjs + typescript project using vite.

```bash
# Create project 
$ npm create vite PROJECT_NAME

# Select a framework
react

# Select a variant:
react-ts
```

## JEST + REACT-TESTING-LIBRARY
Siga as instruções para baixar os pacotes necessários:

```bash
# Install dependencies of the jest
$ npm install -D jest @types/jest ts-node ts-jest jest-environment-jsdom jest-transform-stub

# Install dependencies of the react-testig-library
$ npm install -D @testing-library/react @testing-library/user-event @testing-library/jest-dom
```

Criar o arquivo **jest.config.ts** na raiz do seu projeto, com o conteudo igual ao exemplo abaixo:

```typescript
export default {
  testEnvironment: "jsdom",
  transform: {
    "^.+\\.tsx?$": "ts-jest"
  },
  moduleNameMapper: {
    ".+\\.(css|styl|less|sass|scss|svg|png|jpg|ttf|woff|woff2)$": "jest-transform-stub",
  },
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
}
```

Criar o arquivo **jest.setup.ts** na raiz do seu projeto, com o conteudo igual ao exemplo abaixo:

```typescript
import '@testing-library/jest-dom/extend-expect'
```