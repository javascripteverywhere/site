import React from "react";
import styled from "styled-components";

import modularScale from "./styles/modular-scale";
import { theme } from "./styles/theme.js";
import { Wrapper } from "./wrapper";

const StyledInputArea = styled.section`
  @media screen and (min-width: 40em) {
    display: flex;
  }
`;

const StyledEmail = styled.section`
  padding: 2em 0;
  background: ${theme.primary};
  color: ${theme.secondary};
  font-size: 0.75em;

  p {
    margin-top: 0;
  }

  form {
    margin: 1em 0;
  }
  label {
    display: block;
    font-size: ${modularScale(2)};
  }

  input {
    line-height: 1.4em;
  }

  input[type="email"] {
    padding: 6px;
    margin-right: 10px;
    @media screen and (min-width: 40em) {
      width: 42%;
    }
  }

  input[type="submit"] {
    border: none;
    background: ${theme.accent};
    border: 1px solid ${theme.accent};
    color: ${theme.primary};
    border-radius: 4px;
    cursor: pointer;

    :hover,
    :focus,
    :active {
      background: ${theme.primary};
      color: ${theme.accent};
    }
  }
`;

const EmailHeading = styled.h2`
  color: ${theme.accent};
  margin-bottom: 0;
`;

const Email = () => {
  const handleSubmit = event => {
    window.open("https://buttondown.email/jseverywhere", "popupwindow");
  };

  return (
    <StyledEmail id="email">
      <Wrapper>
        <EmailHeading>Join the Newsletter</EmailHeading>
        <p>Sign up to receive updates and exclusive content.</p>
        <form
          action="https://buttondown.email/api/emails/embed-subscribe/jseverywhere"
          method="post"
          target="popupwindow"
          onSubmit={handleSubmit}
          className="embeddable-buttondown-form"
          id="signup"
        >
          <label htmlFor="bd-email">Email</label>
          <StyledInputArea>
            <input type="email" name="email" id="bd-email" />
            <input type="hidden" value="1" name="embed" />
            <input type="submit" value="Subscribe" />
          </StyledInputArea>
        </form>
      </Wrapper>
    </StyledEmail>
  );
};

export default Email;
