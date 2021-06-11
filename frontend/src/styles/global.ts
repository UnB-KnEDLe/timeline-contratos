import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root {
    --primary: #2980B9;


    --background: #FFFFFF;
  }

    /* width */
    ::-webkit-scrollbar {
    width: 10px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    background: #AEE3FF;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: #004E81;
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: #2980B9;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  // font-size: 16px (Desktop)
  html {
    @media (max-width: 1080px){
      font-size:93.75%; // 15px
    }

    @media (max-width: 720px){
      font-size:87.5%; // 14px
    }
  }

  // REM - 1rem = 16px

  body {
    background: var(--background);
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    font-family: 'Montserrat', sans-serif;
    font-weight: 400;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 600;
  }

  button {
    cursor: pointer;
  }

  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;
