import styled from 'styled-components';

export const FooterWrapper = styled.div`
   padding: 64px 128px;
   backdrop-filter: blur(11px);
   display: flex;
   align-items: center;
   justify-content: space-between;
`;

export const Copyright = styled.p`
   font-size: 18px;
   line-height: 21px;
   color: #E6E6E6;
   max-width: 774px;
`;

export const ContactSection = styled.div``;

export const Text = styled.p`
   margin: 0 0 16px;
   padding: 0;
   text-transform: uppercase;
   font-size: 18px;
   line-height: 21px;
   font-weight: 700;
   color: #E6E6E6;
`;

export const Email = styled.a`
   font-size: 18px;
   line-height: 21px;
   padding: 0;
   color: #E6E6E6;
   text-decoration: none;

   &:hover, &:active {
      color: #A42CEF;
   }
`;

export const Address = styled.p`
   font-size: 18px;
   line-height: 21px;
   margin: 6px 0 0;
   padding: 0;
   color: #E6E6E6;
`;

