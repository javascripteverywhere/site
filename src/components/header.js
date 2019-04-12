import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";

import logo from "../images/logo.svg";
import { theme } from "../styles/theme.js";
import { Wrapper } from "./wrapper.js";
import { Menu } from "./menu.js";

const StyledHeader = styled.header`
  background-color: ${theme.accent};
  padding: 1em;
`;

const Logo = styled.div`
  flex: 1;
`;

const Header = ({ siteTitle, menuLinks }) => (
  <StyledHeader>
    <Logo>
      <Link to="/">
        <img src={logo} alt="JavaScript Everywhere Logo" height="50" />
      </Link>
    </Logo>
    {/* <Menu menuLinks={menuLinks} /> */}
  </StyledHeader>
);

Header.propTypes = {
  siteTitle: PropTypes.string
};

Header.defaultProps = {
  siteTitle: ``
};

export default Header;
