import React from 'react';
import * as P from './parts';
import Arrow from '../../../../../assets/arrow.svg';

interface OrderTemp {
   id: string;
   date: string;
   delivery: string;
   payment: string;
   status: string;
   total: string;
};

interface TriggerProps {
   isOpen: boolean;
   order: OrderTemp;
}

const Trigger: React.FC<TriggerProps> = ({ order, isOpen }) => (
   <P.TriggerWrapper>
      <P.Text>{order.id}</P.Text>
      <P.Text>{order.date}</P.Text>
      <P.Text>{order.delivery}</P.Text>
      <P.Text>{order.payment}</P.Text>
      <P.Text>$ {order.total}</P.Text>
      <P.Text>{order.status}</P.Text>
      <P.ImageWrapper><P.Image isOpen={isOpen} src={Arrow} /></P.ImageWrapper>
   </P.TriggerWrapper>
)


export default Trigger;
