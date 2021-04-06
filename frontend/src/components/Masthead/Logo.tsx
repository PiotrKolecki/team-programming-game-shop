import styled from "styled-components";
import { theme } from "../../constants";

const Div = styled.div`
  font-family: ${theme.fonts.orbitron};
  font-size: 1.2rem;

  @media (max-width: 600px) {
    display: none;
  }
`;

export function Logo() {
  return <Div>GameStore</Div>;
}
