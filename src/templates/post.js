import React from "react";
import { graphql } from "gatsby";
import MDXRenderer from "gatsby-mdx/mdx-renderer";

import Layout from "../components/layout";
import SEO from "../components/seo";
import { Wrapper } from "../components/wrapper";

class PostTemplate extends React.Component {
  render() {
    const post = this.props.data.mdx;

    return (
      <Layout location={this.props.location}>
        <SEO title={post.frontmatter.title} description={post.excerpt} />
        <Wrapper>
          <h1>{post.frontmatter.title}</h1>
          <p>{post.frontmatter.date}</p>
          <MDXRenderer>{post.code.body}</MDXRenderer>
        </Wrapper>
        <hr />
      </Layout>
    );
  }
}

export default PostTemplate;

export const pageQuery = graphql`
  query($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
      }
      code {
        body
      }
    }
  }
`;
