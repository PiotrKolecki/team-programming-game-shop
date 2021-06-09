import React from "react";
import { DELIVERY_FEE, PAYMENT_FEE } from "../constants";
import * as P from "./parts";

const addDolarPrefix = (cost: number) => ["$", cost.toFixed(2)].join(" ");

interface BasketSummaryProps {
  totalProductsPrice: number;
}

export const BasketSummary: React.FC<BasketSummaryProps> = ({
  totalProductsPrice,
}) => (
  <P.BasketSummaryWrapper>
    <P.Title>The total amount of</P.Title>
    <P.FeeWrapper>
      <P.Label>Items</P.Label>
      <P.Price>{addDolarPrefix(totalProductsPrice)}</P.Price>
    </P.FeeWrapper>
    <P.FeeWrapper>
      <P.Label>Delivery fee</P.Label>
      <P.Price>{addDolarPrefix(DELIVERY_FEE)}</P.Price>
    </P.FeeWrapper>
    <P.FeeWrapper>
      <P.Label>Payment fee</P.Label>
      <P.Price>{addDolarPrefix(PAYMENT_FEE)}</P.Price>
    </P.FeeWrapper>
    <P.SummaryWrapper>
      <P.Label>Total</P.Label>
      <P.Price>
        {addDolarPrefix(totalProductsPrice + DELIVERY_FEE + PAYMENT_FEE)}
      </P.Price>
    </P.SummaryWrapper>
  </P.BasketSummaryWrapper>
);

export default BasketSummary;
