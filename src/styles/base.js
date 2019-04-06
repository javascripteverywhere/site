import { css } from "styled-components";
import { normalize } from "polished";

const base = css`
  ${normalize()}
  html {
    box-sizing: border-box;
  }
  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }
`;

export default base;
