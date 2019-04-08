import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";

import logo from "../images/logo.svg";
import { Wrapper } from "./wrapper.js";
import { Menu } from "./menu.js";

const StyledHeader = styled.header`
  background-color: #fcc853;
`;

const HeaderWrap = styled(Wrapper)`
  display: flex;
  margin: 0 auto;
  width: 100%
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  padding-top: 1em;
  padding-bottom: 1em;
`;

const Logo = styled.div`
  flex: 1;
`;

const Header = ({ siteTitle, menuLinks }) => (
  <StyledHeader>
    <HeaderWrap>
      <Logo>
        <Link to="/">
          <img src={logo} alt="JavaScript Everywhere Logo" height="50" />
        </Link>
      </Logo>
      <Menu menuLinks={menuLinks} />
    </HeaderWrap>
  </StyledHeader>
);

Header.propTypes = {
  siteTitle: PropTypes.string
};

Header.defaultProps = {
  siteTitle: ``
};

export default Header;
