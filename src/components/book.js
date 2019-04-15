import React from "react";
import styled from "styled-components";

import { Wrapper } from "./wrapper";
import { SectionHeading } from "./styles/section-heading";
import Image from "./image";

const BookSection = styled.section`
  padding: 2em 0;
`;

const BookHeading = styled(SectionHeading)`
  :before {
    content: "📚";
  }
`;

const BookSub = styled.div`
  @media screen and (min-width: 40em) {
    display: flex;
  }
`;

const Column = styled.div`
  width: 100%;

  padding: 0;
  @media screen and (min-width: 40em) {
    width: 50%;
  }
`;

const BookCover = styled(Column)`
  width: 60%;

  @media screen and (min-width: 40em) {
    width: 50%;
    padding-right: 0.5em;
  }
`;

const BookDescription = styled(Column)`
  width: 100%;
  @media screen and (min-width: 40em) {
    padding-left: 0.5em;
  }

  h3 {
    font-size: 1.2em;

    span {
      display: block;
      font-size: 0.875em;
      font-family: "Plex Medium";
    }
  }
`;

const Bump = styled.p`
  margin-top: 3em;
`;

export const Book = () => (
  <BookSection>
    <Wrapper>
      <BookHeading>The Book</BookHeading>
      <BookSub>
        <BookCover>
          <Image />
        </BookCover>
        <BookDescription>
          <h3>
            Coming from O’Reilly <span>Spring 2020</span>
          </h3>
          <p>
            <em>JavaScript Everywhere</em> (also known as “the fancy pigeon
            book”{" "}
            <span role="img" aria-label="Bird">
              🐦
            </span>
            ) by Adam D. Scott is slated for release in the Spring of 2020.
          </p>
          <Bump>
            Read the in-progress draft with{" "}
            <a href="https://www.oreilly.com/">Safari Early Access</a>
          </Bump>
        </BookDescription>
      </BookSub>
    </Wrapper>
  </BookSection>
);
