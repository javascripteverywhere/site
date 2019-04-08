import React from "react";
import PropTypes from "prop-types";
import { StaticQuery, graphql } from "gatsby";
import { createGlobalStyle } from "styled-components";

import Header from "./header";
import { Wrapper } from "./wrapper";

import base from "../styles/base";
import typography from "../styles/typography";

// global styles for the site
const GlobalStyle = createGlobalStyle`
  ${base}
  ${typography}
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
          <main>{children}</main>
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
