import styled from "styled-components";
import { Welcome } from "./Welcome/Welcome";

const Section = styled.section`
  background: transparent
    linear-gradient(89deg, #0000009b 0%, #14141464 46%, #54545400 100%) 0% 0%
    no-repeat padding-box;
  height: 100vh;
  width: 100vw;
  position: absolute;
  top: 0;
  left: 0;
`;

export function Login() {
  return (
    <Section>
      <Welcome />
    </Section>
  );
}
