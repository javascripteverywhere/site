import React from "react";
import PropTypes from "prop-types";
import { StaticQuery, graphql } from "gatsby";
import { createGlobalStyle } from "styled-components";
import { normalize, modularScale } from "polished";

import Header from "./header";
import { Wrapper } from "./wrapper";

// global styles for the site
const GlobalStyle = createGlobalStyle`
${normalize()}
  body {
    color: #333;
    font-family: Georgia;
  }

  h1, h1, h3 {
    font-family: "Helvetica Neue", sans-serif;
  }
`;

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteInfoQuery {
        site {
          siteMetadata {
            title
            author
            menuLinks {
              name
              link
            }
          }
        }
      }
    `}
    render={data => (
      <div>
        <GlobalStyle />
        <Header
          siteTitle={data.site.siteMetadata.title}
          menuLinks={data.site.siteMetadata.menuLinks}
        />
        <div>
          <main>
            <Wrapper>{children}</Wrapper>
          </main>
          <footer>
            <Wrapper>
              © {new Date().getFullYear()} {data.site.siteMetadata.author}
            </Wrapper>
          </footer>
        </div>
      </div>
    )}
  />
);

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
