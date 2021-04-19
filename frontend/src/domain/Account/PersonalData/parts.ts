import styled from 'styled-components';

export const PersonalDataWrapper = styled.div`
   padding: 0 50px 50px;
`;

export const EmailWrapper = styled.div`
   display: flex;
   align-items: center;
   padding-left: 38px;
   border-left: 6px solid #3F3FB7;
`;

export const ImageWrapper = styled.div`
   border: 2px solid #FFFFFF;
   display: inline-block;
   border-radius: 666px;
`;

export const Image = styled.img`
   padding: 10px 8px 0px;
`;

export const Email = styled.h3`
   margin: 0;
   padding: 0;
   margin-left: 50px;
   font-size: 25px;
   line-height: 25px;
   text-transform: uppercase;
   font-weight: 400;
`;

export const UserDataWrapper = styled.div`
   display: flex;
   margin: 48px 0 64px;
   justify-content: space-between;
`;

export const Col = styled.div`
   display: grid;
   grid-template-columns: repeat(2, 1fr);
   grid-auto-rows: max-content;
   padding: 0 44px;
`;

export const Button = styled.button`
   margin: 0 auto;
   display: block;
   color: #F2F0F0F0;
   font-size: 16px;
   line-height: 21px;
   padding: 8px 216px;
   background: #FFFCFC19;
   border: 1px solid #F2F0F0F0;

   &:hover {
      cursor: pointer;
   }

   &:active, &:hover {
      color: #3F3FB7;
      border: 1px solid #3F3FB7;
   }
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
   color: #D6D5D5;
`;

export const StyledInput = styled.input`
   color: #E6E6E6;
   font-size: 18px;
   line-height: 18px;
   padding: 6px 0;
   margin: 0;
   background: none;
   outline: none !important;
   border: none;
   border-bottom: 1px solid #E6E6E6;
   font-family: 'Roboto';
   width: 250px;

   &:disabled {
      color: #CFCFCF;
      border-bottom: 1px solid #CFCFCF;   
   }

   &:focus {
      border-bottom: 1px solid #3F3FB7;
   }
`;

export const ValidationError = styled.p`
   margin: 0;
   padding: 0;
   color: #B71C1C;
   font-size: 13px;
   margin-top: 4px;
`;
