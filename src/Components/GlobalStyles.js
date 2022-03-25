import { createGlobalStyle} from "styled-components";

import RobotoMedium from '../fonts/Roboto/Roboto-Medium.ttf'

const GlobalStyle = createGlobalStyle`
@font-face {
  font-family: 'Roboto Medium';
  src: url(${RobotoMedium}) format('truetype');
  font-weight: 300;
  font-style: normal;
  font-display: auto;
}

* {
  margin: 0;
  padding: 0;
  text-decoration: none;
}

:root {
  --black-transparent: rgba(30,30,30,0.9);
}

body {
  min-height: 100vh;
  color: white;
  background-color: var(--black-transparent);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
}
`;


export default GlobalStyle