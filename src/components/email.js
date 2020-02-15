import React, { useState } from "react";
import styled from "styled-components";
import * as qs from "query-string";
import { ClipLoader } from "react-spinners";

import modularScale from "./styles/modular-scale";
import { theme } from "./styles/theme.js";
import { Wrapper } from "./wrapper";
import EmailForm from "./emailForm";

const StyledInputArea = styled.section`
  display: flex;
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

const Grid = styled.div`
  display: grid;
  grid-template-columns: 3fr 1fr;
  align-items: center;
`;

const EmailHeading = styled.h2`
  color: ${theme.accent};
  margin-bottom: 0;
`;

const Email = () => {
  // const [subscribed, setSubscribed] = useState(false);
  // const [email, setEmail] = useState("");
  // const [loading, setLoading] = useState(false);

  // const handleSubmit = event => {
  //   event.preventDefault();
  //   setLoading(true);

  //   fetch("https://buttondown.email/api/emails/embed-subscribe/jseverywhere", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/x-www-form-urlencoded"
  //     },
  //     body: qs.stringify({ email })
  //   }).then(() => {
  //     setSubscribed(true);
  //     setLoading(false);
  //   });
  // };

  return (
    <StyledEmail id="email">
      <Wrapper>
        <EmailHeading>Join the Newsletter</EmailHeading>
        <p>Sign up to receive updates and exclusive content.</p>
        <EmailForm />
        {/* {!subscribed ? (
          <Grid>
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
          </Grid>
        ) : (
          <p>Thank you for subscribing!</p>
        )} */}
      </Wrapper>
    </StyledEmail>
  );
};

export default Email;
