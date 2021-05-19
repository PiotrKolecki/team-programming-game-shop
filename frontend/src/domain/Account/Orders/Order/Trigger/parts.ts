import styled from 'styled-components';

export const TriggerWrapper = styled.div`
   background: #252429;
   display: grid;
   grid-template-columns: 3fr 3fr 3fr 3fr 3fr 3fr 1fr;

   &:hover {
      cursor: pointer;
   }
`;

export const Text = styled.p`
   margin: 0;
   padding: 18px 32px;
   font-size: 16px;
   line-height: 18px;
   text-align: center;
   color: #E6E6E6;
   display: flex;
   align-items: center;
   justify-content: center;
   font-family: "Rubik";
`;

export const ImageWrapper = styled.div`
   display: flex;
   align-items: center;
   justify-content: center;
`;

export const Image = styled.img<{ isOpen: boolean }>`
   transform: rotate(-180deg);
   transition: transform 300ms cubic-bezier(0.4, 0, 0.2, 1) 0s;
   width: 24px;

   ${({ isOpen }) => isOpen && 'transform: rotate(0deg);'};
`;
