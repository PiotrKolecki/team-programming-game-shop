import styled from "styled-components";

export const FooterWrapper = styled.footer`
  padding: 64px 128px;
  backdrop-filter: blur(11px);
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Copyright = styled.p`
  font-size: 18px;
  line-height: 21px;
  color: #e6e6e6;
  max-width: 774px;
  font-family: "Lao Sangam MN";
`;

export const ContactSection = styled.div``;

export const Text = styled.p`
  margin: 0 0 16px;
  padding: 0;
  text-transform: uppercase;
  font-size: 20px;
  line-height: 24px;
  font-weight: 700;
  color: #e6e6e6;
  font-family: "Rubik";
`;

export const Email = styled.a`
  font-size: 18px;
  line-height: 21px;
  padding: 0;
  color: #e6e6e6;
  text-decoration: none;
  font-family: "Lao Sangam MN";

  &:hover,
  &:active {
    color: #a42cef;
  }
`;

export const Address = styled.p`
  font-size: 18px;
  line-height: 21px;
  margin: 6px 0 0;
  padding: 0;
  color: #e6e6e6;
  font-family: "Lao Sangam MN";
`;
