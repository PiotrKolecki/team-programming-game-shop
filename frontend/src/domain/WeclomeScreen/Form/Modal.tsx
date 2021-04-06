import React from "react";
import styled from "styled-components";
import { theme } from "../../../constants";

const Section = styled.section`
  position: absolute;
  top: 50%;
  transform: translate(0, -50%);
  backdrop-filter: blur(13px);
  background: ${theme.colors.inputBackground};
  border-radius: 6px;
  width: 20vw;
  min-width: 300px;
  right: 0;
  margin: 0 10vw;
  padding: 40px 70px;

  @media (max-height: 750px) {
    bottom: 0;
    top: initial;
    transform: translate(-50%, 0);
    left: 50%;
    right: initial;
    margin: 0;
  }
`;

const Title = styled.h2`
  text-transform: uppercase;
  letter-spacing: 2px;
  display: flex;
  font-size: 2.2rem;
  font-weight: 500;
  margin: 0;
`;

const Description = styled.p`
  font-size: 1.1rem;
  line-height: 1.6rem;
`;

type Props = React.PropsWithChildren<{
  title: React.ReactNode;
}>;

export function Modal({ children, title }: Props) {
  return (
    <Section>
      <Title>{title}</Title>
      <Description>
        Welcome to GameStore - a place where you will find everything your
        computer needs.
      </Description>
      {children}
    </Section>
  );
}
