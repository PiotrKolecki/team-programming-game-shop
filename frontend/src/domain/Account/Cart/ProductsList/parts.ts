import styled from 'styled-components';
import { colors, fonts } from '../../../../constants/theme';

export const ProductsListWrapper = styled.div`
   display: flex;
   flex-direction: column;
   align-items: flex-start;
`;

export const ProductsWrapper = styled.div``;

export const SummaryWrapper = styled.div`
   display: flex;
   justify-content: flex-end;
   width: 100%;
   padding-top: 22px;
   border-top: 1px solid ${colors.silverChalice};
   margin-top: 18px;
`;

export const Label = styled.p`
   margin: 0;
   padding: 0;
   color: ${colors.lightGray};
   font-family: ${fonts.rubik};
   font-size: 15px;
   line-height: 15px;
   text-transform: uppercase;
`;

export const TotalPrice = styled.p`
   margin: 0 46px 0 36px;
   padding: 0;
   color: ${colors.white};
   font-family: ${fonts.rubik};
   font-size: 15px;
   line-height: 15px;
`;
