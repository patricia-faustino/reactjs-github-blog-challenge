import { createGlobalStyle } from 'styled-components';
export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :focus {
    outline: 0;
  }

  body {
    background-color: ${(props) => props.theme['base-background']};
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    font: normal 1rem Nunito, sans-serif;
    line-height: 160%;
  }

  a {
    text-decoration: none; 
    color: inherit; 
    cursor: pointer; 
    background: none; 
    border: none; 
    padding: 0; 
    margin: 0; 
    font: inherit; 
  }

  a:focus, button:focus {
    outline: none;
    box-shadow: none;
  }

  a:active, button:active {
    border: none;
    outline: none;
    box-shadow: none;
  }
`;
