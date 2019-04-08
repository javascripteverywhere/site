import React from "react";
import { Link, graphql } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";
import { Hero } from "../components/hero";
import { Wrapper } from "../components/wrapper";

export default function Index({ data: { site, allMdx } }) {
  return (
    <Layout>
      <SEO
        title="Home"
        keywords={[
          `book`,
          `graphQL`,
          `react`,
          `apollo`,
          `react native`,
          `electron`
        ]}
      />
      <Hero />
      <Wrapper>
        <p>Welcome to JavaScript Everywhere.</p>
        {/* <h2>Recent Posts</h2>
      <ul>
        {allMdx.edges.map(({ node: post }) => (
          <li key={post.id}>
            <Link
              to={post.frontmatter.slug}
              aria-label={`View ${post.frontmatter.title}`}
            >
              <h3>{post.frontmatter.title}</h3>
            </Link>
            <p>{post.excerpt}</p>
            <p>{post.frontmatter.date}</p>
          </li>
        ))}
      </ul> */}
      </Wrapper>
    </Layout>
  );
}

export const pageQuery = graphql`
  query {
    allMdx(
      limit: 5
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { published: { ne: false } } }
    ) {
      edges {
        node {
          excerpt(pruneLength: 190)
          id
          parent {
            ... on File {
              sourceInstanceName
            }
          }
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
            description
            slug
          }
        }
      }
    }
  }
`;
