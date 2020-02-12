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

  p:first-child {
    margin-top: 0;
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

const Book = () => {
  return (
    <BookSection>
      <Wrapper>
        <BookHeading>The Book</BookHeading>
        <BookSub>
          <BookCover>
            <Image />
          </BookCover>
          <BookDescription>
            <p>
              <em>JavaScript Everywhere</em> (also known as “the fancy pigeon
              book”{" "}
              <span role="img" aria-label="Bird">
                🐦
              </span>
              ) by Adam D. Scott covers building real-world applications with
              technologies such as Node.js, GraphQL, React, React Native, and
              Electron.
            </p>
            <Bump>
              <a href="">Buy the book</a> or read it with{" "}
              <a href="https://learning.oreilly.com/library/view/javascript-everywhere/9781492046974/">
                O'Reilly Online Learning
              </a>
            </Bump>
          </BookDescription>
        </BookSub>
      </Wrapper>
    </BookSection>
  );
};

export default Book;
