import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { colors, fonts } from '../../../../constants/theme';

export const EmptyCartWrapper = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
   padding: 96px 0 128px 0;
`;

export const Title = styled.h3`
   margin: 12px;
   font-size: 31px;
   line-height: 34px;
   font-weight: 400;
   color: ${colors.mercury};
   font-family: ${fonts.rubik};
`;

export const Subtitle = styled.h4`
   margin: 0 0 32px 0;
   font-size: 24px;
   line-height: 26px;
   font-weight: 400;
   color: ${colors.lightGray};
   font-family: ${fonts.rubik};
`;

export const LinkAsButton = styled(Link)`
   margin: 0 auto;
   display: block;
   color: ${colors.ivory};
   font-size: 16px;
   line-height: 21px;
   padding: 8px 216px;
   background: ${colors.buttonBackground};
   border: 1px solid ${colors.ivory};
   text-decoration: none !important;

   &:hover {
      cursor: pointer;
   }

   &:active, &:hover {
      color: ${colors.governorBay};
      border: 1px solid ${colors.governorBay};
   }
`;
