import { Link } from "gatsby";
import React from "react";
import styled from "styled-components";
import { theme } from "./styles/theme.js";

const StyledNav = styled.nav`
  margin: 1.5em 0 0 5%;
  @media screen and (min-width: 40em) {
    align-self: center;
    margin: 0 0.8em 0 0;
  }

  ul {
    margin: 0;
    padding: 0;
  }

  li {
    list-style: none;
    display: inline;
    padding: 0 1.2em 0 0;
    font-size: 0.9rem;
  }

  a,
  a:link a:visited {
    color: ${theme.primary};
    text-decoration: none;
    font-family: "Plex Medium";
    transition: opacity 0.2s ease-in-out;
    opacity: 1;
  }
  a:hover {
    border-bottom: 2px solid ${theme.primary};
  }
`;

const Menu = ({ menuLinks }) => {
  return (
    <StyledNav>
      <ul>
        {/* {menuLinks.map(link => (
          <li key={link.name}>
            <Link to={link.link}>{link.name}</Link>
          </li>
        ))} */}
        <li>
          <a href="https://github.com/javascripteverywhere/">GitHub</a>
        </li>
        <li>
          <a href="https://spectrum.chat/jseverywhere">Community</a>
        </li>
        <li>
          <a href="#bd-email">Newsletter</a>
        </li>
      </ul>
    </StyledNav>
  );
};

export default Menu;
