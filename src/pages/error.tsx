import React from "react";
import styled, { createGlobalStyle, keyframes } from "styled-components";
import { Frame, ThemeProvider } from "@react95/core";

const ErrorPageStyle = createGlobalStyle`
html {
  font-size: 32px;
  box-sizing: border-box;
  @media screen and (max-width: 960px) {
    font-size: 24px;
  }
  @media screen and (max-width: 640px) {
    font-size: 16px;
  }
}
*, *:before, *:after {
  box-sizing: inherit;
}
body,
html {
  width: 100%;
  height: 100%;
  margin: 0;
}
body {
  background-color: #00a;
  font-family: "Perfect DOS";
}
body, a {
  color: #f1f1f1;
}
`;

const makeMeBlink = keyframes`
66% {
  opacity: 0;
}
`;

const Blink = styled.span`
  animation: ${makeMeBlink} 1s steps(1) infinite;
`;

const H1 = styled.h1`
  background-color: #f1f1f1;
  color: #00a;
  padding: 0 1rem;
  font-size: 1rem;
  display: inline-block;
`;

const CenterText = styled.div`
  text-align: center;
`;

const LinkText = styled.a`
  color: white;

  &:visited {
    color: white;
  }
`;

const ErrorPage = () => (
  <ThemeProvider>
    <ErrorPageStyle />

    <Frame
      m={0}
      p="3rem 4rem"
      display="flex"
      justifyContent="center"
      alignItems="center"
      boxShadow="none"
      bg="unset"
      as="main"
    >
      <Frame boxShadow="none" bg="unset" maxWidth="40rem">
        <CenterText>
          <H1>Page not found</H1>
        </CenterText>

        <p>A fatal exception 0x1337 has occurred.</p>
        <p>The current page wasn't found.</p>

        <br />
        <br />

        <CenterText as="p">
          Please <LinkText href="/">click here to go to homepage</LinkText>
          <Blink> _</Blink>
        </CenterText>
      </Frame>
    </Frame>
  </ThemeProvider>
);

export default ErrorPage;
