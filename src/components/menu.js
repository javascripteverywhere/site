import { Link } from "gatsby";
import React from "react";

export const Menu = ({ menuLinks }) => (
  <nav>
    {menuLinks.map(link => (
      <li key={link.name}>
        <Link to={link.link}>{link.name}</Link>
      </li>
    ))}
  </nav>
);
