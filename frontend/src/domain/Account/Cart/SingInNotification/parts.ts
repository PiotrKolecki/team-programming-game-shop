import { colors, fonts } from '../../../../constants/theme';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const SingInNotificationWrapper = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
   padding-top: 32px;
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
   font-size: 21px;
   line-height: 23px;
   font-weight: 400;
   color: ${colors.lightGray};
   font-family: ${fonts.rubik};
`;

export const StyledLink = styled(Link)`
   margin: 0 auto;
   text-decoration: none !important;

   &:hover {
      cursor: pointer;
   }

   &:active, &:hover {
      color: ${colors.governorBay};
   }
`;
