import { createGlobalStyle } from 'styled-components';
import 'modern-normalize';

export const GlobalStyle = createGlobalStyle`
body {
    margin: 0;
    font-family: 'Trebuchet MS', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: ${p => p.theme.colors.primaryColor}
  }

  ul, li {
    list-style: none;
  }

  button {
    cursor: pointer;
  }
`;
