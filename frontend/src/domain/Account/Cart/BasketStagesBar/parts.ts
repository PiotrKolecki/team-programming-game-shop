import styled from 'styled-components';
import { colors, fonts } from '../../../../constants/theme';

export const BarWrapper = styled.div`
   display: flex;
   justify-content: center;
   padding: 36px 0 52px 0;
`;

export const StageWrapper = styled.div`
   display: flex;
   align-items: center;
`;

export const Circle = styled.div<{ isPrevStage: boolean }>`
   width: 32px;
   height: 32px;
   background: ${({ isPrevStage }) => isPrevStage ? colors.governorBay : colors.nobel};
   display: flex;
   align-items: center;
   justify-content: center;
   border-radius: 666px;
   color: ${colors.darkBlue};
   font-family: ${fonts.rubik};
   font-size: 16px;
   line-height: 15px;
`;

export const Image = styled.img``;

export const Text = styled.p`
   font-size: 14px;
   line-height: 14px;
   margin: 0 12px;
   padding: 0;
   font-family: ${fonts.rubik};
`;

export const Line = styled.span`
   background-color: ${colors.grey};
   min-height: 1px;
   min-width: 128px;
   margin-right: 12px;
`;
