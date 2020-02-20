import React from "react";
import styled from "styled-components";

import { SectionHeading } from "./styles/section-heading";
import { Wrapper } from "./wrapper";
import { theme } from "./styles/theme";

const TestimonialWrapper = styled(Wrapper)`
  padding: 2em 0;
`;

const BlockQuote = styled.blockquote`
  font-size: 0.875rem;
`;

const QuoteContent = styled.p`
  font-family: "Plex Italic";
  font-style: italics;
`;

const TestimonialHeading = styled(SectionHeading)`
  :before {
    content: "😊";
  }
`;

const Highlight = styled.span`
  background: ${theme.accent};
`;

const Testimonial = () => {
  return (
    <section id="testimonial">
      <TestimonialWrapper>
        <TestimonialHeading>Praise</TestimonialHeading>

        <BlockQuote>
          <QuoteContent>
            JavaScript Everywhere is an <Highlight>incredible book</Highlight>{" "}
            that will give you everything you need to build applications with
            JavaScript on any platform. The title is the truth: JavaScript is
            everywhere, and this book{" "}
            <Highlight>
              performs the unique feat of putting everything in context for
              developers at all levels
            </Highlight>
            . Read this book then write code and make technology decisions with
            confidence.
          </QuoteContent>
          <p>
            — Eve Porcello, Software Developer and Instructor at Moon Highway
          </p>
        </BlockQuote>

        <BlockQuote>
          <QuoteContent>
            JavaScript Everywhere is the{" "}
            <Highlight>perfect companion</Highlight> for navigating the
            ever-changing modern JavaScript ecosystem. Adam teaches React, React
            Native, and GraphQL in a{" "}
            <Highlight>
              clear, approachable way so you can build robust web, mobile, and
              desktop applications
            </Highlight>
            .
          </QuoteContent>
          <p>— Peggy Rayzis, engineering manager at Apollo GraphQL</p>
        </BlockQuote>
      </TestimonialWrapper>
    </section>
  );
};

export default Testimonial;
