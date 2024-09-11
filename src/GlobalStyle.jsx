import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: Arial, sans-serif;
    background-color: #1a1a2e;
    color: #e0e0e0;
  }

  a {
    text-decoration: none;
  }
`;

export default GlobalStyle;