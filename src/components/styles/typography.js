import { css } from "styled-components";
import { fontFace, em } from "polished";

import modularScale from "./modular-scale";
import { theme } from "./theme.js";

const typography = css`
  ${fontFace({
    fontFamily: "Plex Regular",
    fontFilePath: "../../fonts/ibmplexsans-regular-webfont",
    fontDisplay: "swap"
  })}

  ${fontFace({
    fontFamily: "Plex Bold",
    fontWeight: "700",
    fontFilePath: "../../fonts/ibmplexsans-bold-webfont",
    fontDisplay: "swap"
  })}

  ${fontFace({
    fontFamily: "Plex Medium",
    fontWeight: "600",
    fontFilePath: "../../fonts/ibmplexsans-medium-webfont",
    fontDisplay: "swap"
  })}

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
    /* font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
      Helvetica, Arial, sans-serif; */
    font-family: "Plex Bold", "Helvetica", "Arial", sans-serif;
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
  a:link
  a:visited {
    color: ${theme.primary};
    text-decoration: none;
    box-shadow: inset 0 -.5em 0 ${theme.accent};
    transition: box-shadow .2s ease-in-out;
  }

  a:hover,
  a:focus {
    box-shadow: inset 0 -1.2em 0 ${theme.accent};
  }
`;

export default typography;
