import styled from 'styled-components';
import { colors, fonts } from '../../../../constants/theme';

export const DeliveryWrapper = styled.div`
   background: ${colors.blackRock};
   padding: 46px 42px;
   max-width: 560px;
   width: 560px;
`;

export const Title = styled.h3`
   margin: 0 0 42px 0;
   font-size: 20px;
   line-height: 15px;
   font-weight: 400;
   color: ${colors.mercury};
   font-family: ${fonts.rubik};
   text-transform: uppercase;
`;

export const OptionsWrapper = styled.div`
   display: flex;
   justify-content: space-between;
`;

export const DeliveryOption = styled.button<{ isActive: boolean }>`
   margin: 0;
   padding: 26px 72px 18px 72px;
   border: 1px solid ${({ isActive }) => isActive ? colors.lightSlateBlue : colors.suvaGrey};
   background: none;
   outline: none !important;
   
   &:hover, &:active {
      cursor: pointer;
      border: 1px solid ${colors.lightSlateBlue};
   }

   &:first-of-type {
      margin-right: 24px;
   }
`;

export const Image = styled.img``;

export const Text = styled.p`
   margin: 12px 0 0 0;
   font-size: 16px;
   line-height: 15px;
   font-weight: 400;
   font-family: ${fonts.rubik};
   color: ${colors.mercury};
`;

export const FormWrapper = styled.div`
   margin-top: 48px;
`;

export const TitleWrapper = styled.div`
   display: flex;
   justify-content: space-between;
   align-items: baseline;
`;

export const Button = styled.button`
   font-size: 16px;
   line-height: 15px;
   font-family: ${fonts.rubik};
   color: ${colors.mercury};
   padding: 8px 22px;
   outline: none !important;
   background: ${colors.governorBay};
   border: none;

   &:hover, &:active {
      cursor: pointer;
      background: ${colors.indigo};
   }
`;
