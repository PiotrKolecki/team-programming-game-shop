import styled from 'styled-components';
import { colors, fonts } from '../../../../../constants/theme';

export const FieldsWrapper = styled.div<{ singleElement?: boolean }>`
   display: grid;
   grid-template-columns: ${({ singleElement }) => singleElement ? 'repeat(1, 1fr)' : 'repeat(2, 1fr)'};
`;

export const InputWrapper = styled.div`
   margin-right: 64px;
   margin-bottom: 22px;
`;

export const Label = styled.p`
   margin: 2px;
   padding: 0;
   font-size: 12px;
   line-height: 15px;
   color: ${colors.lightGray};
   font-family: ${fonts.laoSangamMN};
`;

export const StyledInput = styled.input`
   color: ${colors.mercury};
   font-size: 15px;
   line-height: 15px;
   padding: 6px;
   margin: 0;
   background: none;
   outline: none !important;
   border: none;
   border-bottom: 1px solid ${colors.mercury};
   font-family: ${fonts.laoSangamMN};
   width: 100%;

   &:disabled {
      color: ${colors.moonDirt};
      border-bottom: 1px solid ${colors.moonDirt};  
   }

   &:focus {
      border-bottom: 1px solid ${colors.governorBay};
   }
`;

export const ValidationError = styled.p`
   margin: 0;
   padding: 0;
   color: ${colors.fireBrick};
   font-size: 13px;
   margin-top: 4px;
`;

export const Select = styled.select`
   border: none;
   outline: none !important;
   width: 64px;
   color: ${colors.mercury};
   font-family: ${fonts.laoSangamMN};
   font-size: 15px;
   line-height: 15px;
   border-bottom: 1px solid ${colors.mercury};
   padding: 6px;
   background: none;
   margin-top: 2px;
   width: 100%;
`;

export const Option = styled.option`
   color: ${colors.black};
`;
