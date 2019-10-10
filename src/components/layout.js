import React from "react";
import PropTypes from "prop-types";
import { StaticQuery, graphql } from "gatsby";
import { createGlobalStyle } from "styled-components";

import Header from "./header";
import Footer from "./footer";
import { Wrapper } from "./wrapper";

import base from "./styles/base";
import typography from "./styles/typography";

// global styles for the site
const GlobalStyle = createGlobalStyle`
  ${base}
  ${typography}
`;

const siteInfo = graphql`
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
`;

const Layout = ({ children }) => {
  return (
    <StaticQuery
      query={siteInfo}
      render={data => (
        <div>
          <GlobalStyle />
          <Header
            siteTitle={data.site.siteMetadata.title}
            menuLinks={data.site.siteMetadata.menuLinks}
          />
          <div>
            <main>{children}</main>
            <Footer author={data.site.siteMetadata.author} />
          </div>
        </div>
      )}
    />
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
