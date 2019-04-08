import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import { Wrapper } from "../components/wrapper";

export default function About() {
  return (
    <Layout>
      <SEO
        title="About"
        keywords={[
          `book`,
          `graphQL`,
          `react`,
          `apollo`,
          `react native`,
          `electron`
        ]}
      />
      <Wrapper>
        <h1>About</h1>
      </Wrapper>
    </Layout>
  );
}
