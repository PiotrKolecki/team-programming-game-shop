import React from "react";
import styled from "styled-components";

const Header = styled.h1`
  font-weight: 100;
  text-transform: uppercase;
  letter-spacing: 0.55px;
  font-size: 45px;
`;

export function Welcome() {
  return <Header>Welcome to</Header>;
}
