import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";

import { Wrapper } from "./wrapper.js";
import { Menu } from "./menu.js";

const Header = ({ siteTitle, menuLinks }) => (
  <header>
    <Wrapper>
      <h1>
        <Link to="/">{siteTitle}</Link>
      </h1>
      <Menu menuLinks={menuLinks} />
    </Wrapper>
  </header>
);

Header.propTypes = {
  siteTitle: PropTypes.string
};

Header.defaultProps = {
  siteTitle: ``
};

export default Header;
