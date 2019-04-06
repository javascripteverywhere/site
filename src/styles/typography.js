import { css } from "styled-components";
import { em } from "polished";

import modularScale from "./modular-scale";

const typography = css`
  @media screen and (min-width: 40em) {
    html {
      font-size: ${em("18px")};
    }
  }

  body {
    line-height: 1.58;
    font-family: "Georgia", serif;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    line-height: 1.2;
    margin-top: 0;
    margin-bottom: 0.75em;
    font-weight: 500;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
      Helvetica, Arial, sans-serif;
  }

  h1 {
    font-size: ${modularScale(5)};

    @media only screen and (min-width: 40rem) {
      font-size: ${modularScale(6)};
    }
  }

  h2 {
    font-size: ${modularScale(4)};
    @media only screen and (min-width: 40rem) {
      font-size: ${modularScale(5)};
    }
  }

  h3 {
    font-size: ${modularScale(2)};
    @media only screen and (min-width: 40rem) {
      font-size: ${modularScale(3)};
    }
  }
`;

export default typography;
