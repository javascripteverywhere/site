import { Link } from "gatsby";
import React from "react";
import styled from "styled-components";

const StyledNav = styled.nav`
  font-family: sans-serif;
  flex: 2;
  text-align: right;

  ul {
    margin: 0;
    padding: 0;
  }

  li {
    list-style: none;
    display: inline;
    margin-left: 1em;
  }

  a,
  a:link a:visited {
    color: black;
    text-decoration: none;
    font-family: "Plex Medium";
    transition: opacity 0.2s ease-in-out;
    opacity: 1;
  }

  a:hover {
    opacity: 0.7;
  }
`;

export const Menu = ({ menuLinks }) => (
  <StyledNav>
    <ul>
      {menuLinks.map(link => (
        <li key={link.name}>
          <Link to={link.link}>{link.name}</Link>
        </li>
      ))}
      <li>
        <a href="https://github.com/javascripteverywhere/">GitHub</a>
      </li>
      <li>
        <a href="https://spectrum.chat/jseverywhere">Spectrum</a>
      </li>
    </ul>
  </StyledNav>
);
