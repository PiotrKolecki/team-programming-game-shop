import styled from 'styled-components';

export const Order = styled.div`
   border-bottom: 1px solid #575757;
`;

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

export const OrderDetailsWrapper = styled.div`
   background: #252429;
   padding: 24px 48px 48px;
`;

export const ProductsList = styled.div``;

export const Product = styled.div`
   display: grid;
   grid-template-columns: 0.5fr 4fr 1fr 1fr;
   border-bottom: 1px solid #7E7E7E;
   padding: 16px 24px;
`;

export const ProductImage = styled.img`
   width: 64px;
`;

export const ProductName = styled.p`
   margin: 0;
   padding: 0;
   color: #E6E6E6;
   font-size: 16px;
   line-height: 18px;
   display: flex;
   align-items: center;
   font-family: "Rubik";
`;

export const ProductInfo = styled.p`
   margin: 0;
   padding: 0;
   color: #E6E6E6;
   font-size: 16px;
   line-height: 18px;
   display: flex;
   align-items: center;
   justify-content: center;
   font-family: "Rubik";
`;

export const SummaryWrapper = styled.div`
   margin-top: 12px;
`;

export const AdditionalCosts = styled.div`
   display: grid;
   grid-template-columns: 0.5fr 4fr 1fr 1fr;
   padding: 6px 24px;
`;

export const Summary = styled.div`
   display: grid;
   grid-template-columns: 0.5fr 4fr 1fr 1fr;
   padding: 6px 24px;
`;

export const TotalInfo = styled.p`
   margin: 0;
   padding: 0;
   color: #E6E6E6;
   font-size: 16px;
   line-height: 18px;
   display: flex;
   align-items: center;
   justify-content: center;
   border-top: 1px solid #7E7E7E;
   padding: 12px 0;
   font-weight: 700;
   font-family: "Rubik";
`;

export const DeliveryDetails = styled.div`
   display: grid;
   grid-template-columns: 1fr 1fr;
   margin-bottom: 24px;
`;

export const Delivery = styled.div`
   padding: 12px 20px;
   border: 1px solid #7E7E7E;
   margin: 0 48px;
`;

export const DeliveryLabel = styled.p`
   margin: 0;
   padding: 6px 0;
   color: #E6E6E6;
   font-size: 16px;
   line-height: 18px;
   font-weight: 700;
   font-family: "Rubik";
`;

export const DeliveryText = styled.p`
   margin: 0;
   padding: 2px 0;
   color: #E6E6E6;
   font-size: 14px;
   line-height: 20px;
   font-family: "Rubik";
`;
