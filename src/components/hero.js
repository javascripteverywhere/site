import { Link } from "gatsby";
import React from "react";
import styled from "styled-components";

import { Wrapper } from "./wrapper";
import modularScale from "../styles/modular-scale";
import dove from "../images/dove.png";

const StyledHero = styled.div`
  text-align: center;
  background-color: #fcc853;
  padding-bottom: ${modularScale(2)};
  padding-top: ${modularScale(2)};
`;

export const Hero = () => (
  <StyledHero>
    <Wrapper>
      <h1>JavaScript Everywhere</h1>
    </Wrapper>
  </StyledHero>
);
