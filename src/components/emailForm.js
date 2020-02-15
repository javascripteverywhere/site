import React, { useState } from "react";
import styled from "styled-components";
import * as qs from "query-string";
import { ClipLoader } from "react-spinners";

import modularScale from "./styles/modular-scale";
import { theme } from "./styles/theme.js";

const StyledInputArea = styled.section`
  display: flex;
`;

const EmailWrap = styled.div`
  display: grid;
  grid-template-columns: 3fr 1fr;
  align-items: center;

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
    width: 65%;
    /* @media screen and (min-width: 40em) {
      width: 42%;
    } */
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

const EmailForm = () => {
  const [subscribed, setSubscribed] = useState(false);
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = event => {
    event.preventDefault();
    setLoading(true);

    fetch("https://buttondown.email/api/emails/embed-subscribe/jseverywhere", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      body: qs.stringify({ email })
    }).then(() => {
      setSubscribed(true);
      setLoading(false);
    });
  };

  if (!subscribed) {
    return (
      <EmailWrap>
        <form
          action="https://buttondown.email/api/emails/embed-subscribe/jseverywhere"
          method="post"
          onSubmit={handleSubmit}
          className="embeddable-buttondown-form"
          id="signup"
        >
          <label htmlFor="bd-email">Email</label>
          <StyledInputArea>
            <input
              type="email"
              name="email"
              id="bd-email"
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
            <input type="hidden" value="1" name="embed" />
            <input type="submit" value="Subscribe" />
          </StyledInputArea>
        </form>
        <ClipLoader
          size={50}
          //size={"150px"} this also works
          color={"#ffffff"}
          loading={loading}
        />
      </EmailWrap>
    );
  } else {
    return <p>Thank you for subscribing!</p>;
  }
};

export default EmailForm;
