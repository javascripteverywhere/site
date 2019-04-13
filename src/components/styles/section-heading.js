import styled from "styled-components";
import { theme } from "./theme";

export const SectionHeading = styled.h2`
  display: inline-block;
  position: relative;

  :after {
    display: inline-block;
    position: absolute;
    left: 0;
    bottom: -4px;
    height: 5px;
    width: 88%;
    margin-left: 1em;
    background: ${theme.accent};
    transform: rotate(-3deg);
    opacity: 0.8;
    content: "";
  }

  @media screen and (min-width: 850px) {
    margin-left: -1em;
  }
`;
