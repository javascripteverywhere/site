import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Hero from "../components/hero";
import Book from "../components/book";
import Topics from "../components/topics";
import Email from "../components/email";

const Index = () => {
  return (
    <Layout>
      <SEO
        title="JavaScript Everywhere"
        keywords={[
          `book`,
          `node.js`,
          `graphQL`,
          `react`,
          `express.js`,
          `apollo`,
          `react native`,
          `electron`
        ]}
      />
      <Hero />
      <Book />
      <Topics />
      <Email />
    </Layout>
  );
};

export default Index;
