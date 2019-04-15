import React from "react";
import styled from "styled-components";

import { Wrapper } from "./wrapper";
import { SectionHeading } from "./styles/section-heading";
import modularScale from "./styles/modular-scale";
import { theme } from "./styles/theme";
import Image from "./image";

const TopicSection = styled.section`
  padding: 2em 0;
  background: ${theme.background};
`;

const TopicHeading = styled(SectionHeading)`
  :before {
    content: "⚡";
  }
`;

const Highlight = styled.span`
  background: ${theme.accent};
`;

const TopicSub = styled.div`
  margin-top: 2em;
  @media screen and (min-width: 40em) {
    display: flex;
    margin-left: -1em;
  }
  h3 {
    font-size: 
    font-family: "Plex Medium";
    font-size: ${modularScale(1)};
    margin: 0.5em 0;
  }

  ul {
    margin: 0;
    padding: 0;
  }

  li {
    list-style: none;
  }
`;

const Column = styled.div`
  width: 100%;
  padding: 0;

  @media screen and (min-width: 40em) {
    width: 25%;
    padding-left: 1em;
  }
`;

export const Topics = () => (
  <TopicSection>
    <Wrapper>
      <TopicHeading>Topics Covered</TopicHeading>
      <p>
        Ideal for developers who want to build{" "}
        <Highlight>cross-platform applications</Highlight> and ambitious
        beginners looking to <Highlight>bootstrap a business</Highlight>. Learn
        to build a full-stack, <Highlight>production ready</Highlight>{" "}
        application with user accounts, using these technologies:
      </p>
      <TopicSub>
        <Column>
          <h3>
            Server{" "}
            <span role="img" aria-label="file cabinet">
              🗄️
            </span>
          </h3>
          <ul>
            <li>Node.js</li>
            <li>Express.js</li>
            <li>Apollo-Server</li>
            <li>MongoDB</li>
          </ul>
        </Column>
        <Column>
          <h3>
            Web{" "}
            <span role="img" aria-label="laptop">
              💻
            </span>
          </h3>
          <ul>
            <li>React</li>
            <li>Next.js</li>
            <li>Apollo-Client</li>
            <li>styled-components</li>
          </ul>
        </Column>
        <Column>
          <h3>
            Mobile{" "}
            <span role="img" aria-label="phone">
              🤳
            </span>
          </h3>
          <ul>
            <li>React Native</li>
            <li>Expo</li>
            <li>Apollo-Client</li>
            <li>styled-components</li>
          </ul>
        </Column>
        <Column>
          <h3>
            Desktop{" "}
            <span role="img" aria-label="file cabinet">
              🖥️
            </span>
          </h3>
          <ul>
            <li>Electron</li>
            <li>electron-builder</li>
          </ul>
        </Column>
      </TopicSub>
    </Wrapper>
  </TopicSection>
);
