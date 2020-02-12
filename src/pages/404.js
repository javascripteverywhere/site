import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import { Wrapper } from "../components/wrapper";

const NotFoundPage = () => {
  return (
    <Layout footer="false">
      <SEO title="404: Not found" />
      <Wrapper>
        <h1>404: NOT FOUND</h1>
        <p>
          JavaScript may be everywhere... but what you're looking for isn't here
          😿
        </p>
      </Wrapper>
    </Layout>
  );
};

export default NotFoundPage;
