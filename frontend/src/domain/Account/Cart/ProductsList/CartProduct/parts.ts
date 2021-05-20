import styled from 'styled-components';
import { colors, fonts } from '../../../../../constants/theme';

export const CartProductWrapper = styled.div`
   display: flex;
   background: ${colors.blackRock};
   padding: 16px 22px;
   border-bottom: 1px solid ${colors.darkSiver};
   align-items: center;
   max-width: 600px;

   &:last-of-type {
      border-bottom: none;
   }
`;

export const Image = styled.img``;

export const InfoWrapper = styled.div`
   margin-left: 32px;
   display: flex;
   flex-direction: column;
   justify-content: space-between;
   align-self: stretch;
   flex-grow: 1;
`;

export const ProductInfo = styled.div``;

export const Name = styled.p`
   color: ${colors.mercury};
   font-family: ${fonts.rubik};
   font-size: 20px;
   line-height: 21px;
   margin: 0 0 8px 0;
   padding: 0;
`;

export const Producer = styled.p`
   color: ${colors.mercury};
   font-family: ${fonts.laoSangamMN};
   font-size: 15px;
   line-height: 15px;
   margin: 0;
   padding: 0;
`;

export const DeleteButton = styled.button`
   background: none;
   border: none;
   padding: 6px 12px;
   display: flex;
   border-radius: 666px;
   align-self: flex-start;

   &:hover {
      cursor: pointer;
   }

   &:active, &:hover {
      background: ${colors.governorBay};
   }
`;

export const ButtonText = styled.p`
   color: ${colors.mercury};
   font-family: ${fonts.laoSangamMN};
   font-size: 14px;
   line-height: 15px;
   margin: 0 0 0 10px;
   padding: 0;
`;

export const QuantityWrapper = styled.div`
   margin-right: 64px;
   margin-left: 64px;
   display: flex;
   justify-content: center;
   align-items: flex-start;
   flex-direction: column;
`;

export const Select = styled.select`
   border: none;
   outline: none !important;
   width: 64px;
   color: ${colors.mercury};
   font-family: ${fonts.laoSangamMN};
   font-size: 15px;
   line-height: 15px;
   border-bottom: 1px solid ${colors.darkSiver};
   padding: 4px;
   background: none;
   margin-top: 2px;
`;

export const Option = styled.option`
   color: ${colors.black};
`;

export const Label = styled.p`
   color: ${colors.lightGray};
   font-family: ${fonts.laoSangamMN};
   font-size: 11px;
   line-height: 15px;
   margin: 0px;
`;

export const Price = styled.p`
   color: ${colors.lightGray};
   font-family: ${fonts.laoSangamMN};
   font-size: 14px;
   line-height: 18px;
   padding: 4px 12px;
   background: ${colors.governorBay};
   border-radius: 666px;
   margin-right: 15px;
   white-space: nowrap;
`;
