import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";

import logo from "../images/logo.svg";
import { theme } from "./styles/theme.js";
import Menu from "./menu.js";

const StyledHeader = styled.header`
  background-color: ${theme.accent};
  display: flex;
  flex-direction: column;
  padding: 1em 0;

  @media screen and (min-width: 40em) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

const Logo = styled.div`
  margin-left: 5%;
`;

const Header = ({ siteTitle, menuLinks }) => {
  return (
    <StyledHeader>
      <Logo>
        <Link to="/">
          <img src={logo} alt="JavaScript Everywhere Logo" height="50" />
        </Link>
      </Logo>
      <Menu />
      {/* <Menu menuLinks={menuLinks} /> */}
    </StyledHeader>
  );
};

Header.propTypes = {
  siteTitle: PropTypes.string
};

Header.defaultProps = {
  siteTitle: ``
};

export default Header;
