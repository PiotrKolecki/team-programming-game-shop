import styled from 'styled-components';
import { colors, fonts } from '../../../../constants/theme';

export const BasketSummaryWrapper = styled.div`
   padding: 26px 36px 41px 36px;
   background: ${colors.raisinBlack};
   border: 2px solid ${colors.governorBay};
   width: 500px;
   max-width: 500px;
   margin-left: 24px;
`; 

export const Title = styled.h4`
   margin: 0 0 30px 0;
   font-size: 20px;
   line-height: 15px;
   font-weight: 500;
   color: ${colors.lightGray};
   font-family: ${fonts.rubik};
   text-transform: uppercase;
`;

export const FeeWrapper = styled.div`
   display: flex;
   justify-content: space-between;
   margin-bottom: 24px;
`;

export const Label = styled.p`
   margin: 0;
   font-size: 17px;
   line-height: 15px;
   color: ${colors.lightGray};
   font-family: ${fonts.rubik};
   text-transform: uppercase;
`;

export const Price = styled.p`
   margin: 0;
   font-size: 17px;
   line-height: 15px;
   color: ${colors.white};
   font-family: ${fonts.rubik};
`;

export const SummaryWrapper = styled.div`
   display: flex;
   justify-content: space-between;
   padding-top: 16px;
   border-top: 1px solid ${colors.silverChalice};
`;

