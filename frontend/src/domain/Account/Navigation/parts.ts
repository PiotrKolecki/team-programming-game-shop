import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

export const Navigation = styled.div``;

export const Title = styled.h4`
  margin: 0;
  padding-bottom: 12px;
  font-weight: 400;
  text-transform: uppercase;
  font-size: 20px;
  line-height: 26px;
  color: #e6e6e6;
  border-bottom: 1px solid #e6e6e6;
  font-family: "Lao Sangam MN";
`;

export const LinksWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 24px;
`;

export const NavLink = styled(Link)<{ isActive: boolean }>`
  padding: 8px 16px;
  margin-bottom: 4px;
  font-size: 20px;
  line-height: 26px;
  text-decoration: none !important;
  color: #e6e6e6;
  border-radius: 6px;
  font-family: "Lao Sangam MN";

  &:hover,
  &:active {
    color: #a42cef;
  }

  ${({ isActive }) =>
    isActive &&
    css`
      background: #3f3fb7fa;

      &:hover,
      &:active {
        color: #e6e6e6;
        cursor: default;
      }
    `};
`;
