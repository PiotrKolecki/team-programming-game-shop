import React from "react";
import styled from "styled-components";

const Header = styled.p`
  margin: 10px 92px;
  font-weight: 100;
  text-transform: uppercase;
  letter-spacing: 0.55px;
  font-size: 45px;
`;

const AppName = styled.p`
  margin: 10px 92px;
  font-family: "Orbitron", sans-serif;
  letter-spacing: 2px;
  font-size: 65px;
`;

const Description = styled.p`
  max-width: 600px;
  margin: 56px 92px;
  font-size: 22px;
  line-height: 2rem;
`;

const Container = styled.div`
  position: absolute;
  bottom: 15vh;
`;

export function Welcome() {
  return (
    <Container>
      <Header>Welcome to</Header>
      <AppName>Game Store</AppName>
      <Description>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </Description>
    </Container>
  );
}
