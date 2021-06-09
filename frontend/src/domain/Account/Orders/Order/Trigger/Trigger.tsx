import React from "react";
import * as P from "./parts";
import Arrow from "../../../../../assets/arrow.svg";
import { IOrder } from "../../../../../store/orders/types";

interface TriggerProps {
  isOpen: boolean;
  order: IOrder;
}

const Trigger: React.FC<TriggerProps> = ({ order, isOpen }) => (
  <P.TriggerWrapper>
    <P.Text>{order.id}</P.Text>
    <P.Text>{order.date}</P.Text>
    <P.Text>{order.delivery?.method}</P.Text>
    <P.Text>{order.paymentMethod}</P.Text>
    <P.Text>$ {order.price}</P.Text>
    <P.Text>{order.status}</P.Text>
    <P.ImageWrapper>
      <P.Image isOpen={isOpen} src={Arrow} />
    </P.ImageWrapper>
  </P.TriggerWrapper>
);

export default Trigger;
