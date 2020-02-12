import { css } from "styled-components";
import { em } from "polished";

import modularScale from "./modular-scale";
import { theme } from "./theme.js";

const typography = css`
  @font-face {
    font-family: "Plex Regular";
    src: url("./../fonts/ibmplexsans-regular-webfont.woff2") format("woff2"),
      url("./../fonts/ibmplexsans-regular-webfont.woff") format("woff");
    font-display: "swap";
  }

  @font-face {
    font-family: "Plex Bold";
    src: url("./../fonts/ibmplexsans-bold-webfont.woff2") format("woff2"),
      url("./../fonts/ibmplexsans-bold-webfont.woff") format("woff");
    font-display: "swap";
  }

  @font-face {
    font-family: "Plex Medium";
    src: url("./../fonts/ibmplexsans-medium-webfont.woff2") format("woff2"),
      url("./../fonts/ibmplexsans-medium-webfont.woff") format("woff");
    font-display: "swap";
  }

  @font-face {
    font-family: "Plex Regular";
    src: url("./../fonts/ibmplexsans-regular-webfont.woff2") format("woff2"),
      url("./../fonts/ibmplexsans-regular-webfont.woff") format("woff");
    font-display: "swap";
  }

  @media screen and (min-width: 40em) {
    html {
      font-size: ${em("22px")};
      line-height: 1.8;
    }
  }

  body {
    line-height: 1.6;
    font-family: "Plex Regular", "Times";
  }

  main {
    color: ${theme.primary};
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
    font-family: "Plex Bold", -apple-system, BlinkMacSystemFont, "Segoe UI",
      Roboto, Helvetica, Arial, sans-serif;
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

  a,
  a:link a:visited {
    color: ${theme.primary};
    text-decoration: none;
    box-shadow: inset 0 -0.5em 0 ${theme.accent};
    transition: box-shadow 0.2s ease-in-out;
  }

  a:hover,
  a:focus {
    box-shadow: inset 0 -1.2em 0 ${theme.accent};
  }
`;

export default typography;
