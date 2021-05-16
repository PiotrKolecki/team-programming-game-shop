import styled from 'styled-components';
import { colors, fonts } from '../../../../constants/theme';

export const Wrapper = styled.div`
   width: 574px;
   max-width: 574px;
   margin-left: 24px;
`;

export const PaymentWrapper = styled.div`
   background: ${colors.blackRock};
   padding: 46px 42px 32px 42px;
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

export const FieldsWrapper = styled.div``;

export const InputWrapper = styled.div`
   display: flex;
   margin-bottom: 32px;
   align-items: center;
`;

export const Fill = styled.span`
   width: 22px;
   height: 22px;
   border-radius: 666px;
   background: ${colors.governorBay};
   display: block;
   position: absolute;
   top: 6px;
   left: 6px;
`;

export const Circle = styled.span< { isChecked: boolean | undefined } >`
   margin: 0;
   border: 2px solid ${({ isChecked }) => isChecked ? colors.governorBay : colors.mercury};
   width: 34px;
   height: 34px;
   background: none;
   border-radius: 666px;
   position: relative;

   ${Fill} {
      ${({ isChecked }) => !isChecked && 'display: none;'};
   }
`;

export const Label = styled.p`
   text-transform: uppercase;
   font-size: 18px;
   line-height: 15px;
   color: ${colors.mercury};
   font-family: ${fonts.rubik};
   margin: 0 0 0 26px;
`;
