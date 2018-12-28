import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
html {
    box-sizing: border-box;
    font-size: 10px;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
  body {
    padding: 0;
    margin: 0;
    font-size: 1.8rem;
    line-height: 2;
    font-family: 'Helvetica Neue';
    color: ${props => props.theme.black};
    background: ${props => props.theme.yellow};
  }
`;

export default GlobalStyles;
