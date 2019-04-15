import React from "react";
import styled from "styled-components";

import { theme } from "./styles/theme.js";
import { Wrapper } from "./wrapper";

const StyledFooter = styled.footer`
  padding: 2em 0 1em 0;
  background: ${theme.primary};
  text-align: center;
  color: ${theme.secondary};
  font-size: 0.75em;
`;

const Footer = ({ author }) => (
  <StyledFooter>
    <Wrapper>
      © {new Date().getFullYear()} {author}
    </Wrapper>
  </StyledFooter>
);

export default Footer;
