import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Hero from "../components/hero";
import Book from "../components/book";
import Topics from "../components/topics";
import Email from "../components/email";
import Testimonial from "../components/testimonial";

const Index = () => {
  return (
    <Layout>
      <SEO
        title="JavaScript Everywhere Book — Learn JavaScript Application Development"
        keywords={[
          `book`,
          `node.js`,
          `graphQL`,
          `react`,
          `express.js`,
          `apollo`,
          `react native`,
          `electron`,
          `JavaScript`,
          `application development`
        ]}
      />
      <Hero />
      <Book />
      <Topics />
      <Testimonial />
      <Email />
    </Layout>
  );
};

export default Index;
