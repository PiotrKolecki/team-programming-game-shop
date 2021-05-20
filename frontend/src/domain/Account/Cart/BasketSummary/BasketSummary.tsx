import React from 'react';
import * as P from './parts'

interface BasketSummaryProps {
   totalProductsPrice: number;
}

export const BasketSummary: React.FC<BasketSummaryProps> = ({ totalProductsPrice }) => (
      <P.BasketSummaryWrapper>
         <P.Title>The total amount of</P.Title>
         <P.FeeWrapper>
            <P.Label>Items</P.Label>
            <P.Price>{`$ ${totalProductsPrice}`}</P.Price>
         </P.FeeWrapper>
         <P.FeeWrapper>
            <P.Label>Delivery fee</P.Label>
            <P.Price>$ 2.99</P.Price>
         </P.FeeWrapper>
         <P.FeeWrapper>
            <P.Label>Payment fee</P.Label>
            <P.Price>$ 0.99</P.Price>
         </P.FeeWrapper>
         <P.SummaryWrapper>
            <P.Label>Total</P.Label>
            <P.Price>$ 27.96</P.Price>
         </P.SummaryWrapper>
      </P.BasketSummaryWrapper>
);

export default BasketSummary;
