import React, { useState, useEffect } from "react";
import styled, { css } from "styled-components";

import useInterval from "../lib/useInterval";
import { Wrapper } from "./wrapper";
import { theme } from "./styles/theme.js";
import modularScale from "./styles/modular-scale";

const StyledHero = styled.div`
  background-color: ${theme.accent};
  padding-bottom: 3em;
  padding-top: 0;
`;

const SiteTitle = styled.h1`
  padding: 0;
  margin: 0;
  line-height: 1.2;
`;

const SubTitle = styled.h2`
  opacity: 0.7;
  font-size: ${modularScale(1)};
  font-family: "Plex Regular";
`;

const TagLine = styled.p`
  font-size: ${modularScale(2)};
  font-family: "Plex Bold";
`;

const Button = styled.a`
  display: inline-block;
  border-radius: 6px;
  padding: 0.5em;
  background: transparent;
  color: ${theme.primary};
  border: 3px solid ${theme.primary};
  text-decoration: none;
  margin-right: 0.5em;
  margin-bottom: 0.5em;
  box-shadow: none;

  :hover,
  :active,
  :focus {
    background: ${theme.primary};
    color: ${theme.accent};
    box-shadow: none;
  }

  ${props =>
    props.primary &&
    css`
      background: ${theme.primary};
      color: ${theme.secondary};

      :hover,
      :focus {
        color: ${theme.accent};
      }
    `};
`;

const Hero = () => {
  const [text, setText] = useState("GraphQL APIs");
  const [count, setCount] = useState(0);

  const topics = ["web apps", "mobile apps", "desktop apps", "applications"];

  useInterval(() => {
    if (count < topics.length) {
      setText(topics[count]);
    }
    setCount(count + 1);
  }, 1500);

  return (
    <StyledHero>
      <Wrapper>
        <SiteTitle>JavaScript Everywhere</SiteTitle>
        <SubTitle>by Adam D. Scott</SubTitle>
        <TagLine>Learn to use JavaScript to build {text}</TagLine>
        <Button href="#signup" primary>
          <span role="img" aria-label="Heart">
            💖
          </span>{" "}
          Sign up for updates
        </Button>
        <Button href="https://spectrum.chat/jseverywhere">
          Join the Community
        </Button>
      </Wrapper>
    </StyledHero>
  );
};

export default Hero;
