import React, { useState } from 'react';
import Collapsible from 'react-collapsible';
import * as P from './parts';
import Arrow from '../../../../assets/arrow.svg';
import User from '../../../../assets/user.svg';

interface TempProduct {
   id: string;
   name: string;
   price: string;
   quantity: number;
}

interface OrderProps {
   order: {
      id: string;
      date: string;
      products: TempProduct[],
      delivery: string;
      deliveryCost: string;
      payment: string;
      paymentCost: string;
      status: string;
      total: string;
      basketPrice: string;
      deliveryData: {
         recipient: string;
         email: string;
         phone: number;
         street: string;
         city: string;
         zipCode: string;
      }
   }
};

export const Orders: React.FC<OrderProps> = ({ order }) => {
   const [isOpen, setIsOpen] = useState(false);

   const Trigger = (
      <P.TriggerWrapper>
         <P.Text>{order.id}</P.Text>
         <P.Text>{order.date}</P.Text>
         <P.Text>{order.delivery}</P.Text>
         <P.Text>{order.payment}</P.Text>
         <P.Text>$ {order.total}</P.Text>
         <P.Text>{order.status}</P.Text>
         <P.ImageWrapper><P.Image isOpen={isOpen} src={Arrow} /></P.ImageWrapper>
      </P.TriggerWrapper>
   );

   return (
      <P.Order>
         <Collapsible transitionTime={220} trigger={Trigger} onOpening={() => setIsOpen(true)} onClosing={() => setIsOpen(false)}>
            <P.OrderDetailsWrapper>
               <P.DeliveryDetails>
                  <P.Delivery>
                     <P.DeliveryLabel>Adress:</P.DeliveryLabel>
                     <P.DeliveryText>{order.deliveryData.street}</P.DeliveryText>
                     <P.DeliveryText>{`${order.deliveryData.zipCode}  ${order.deliveryData.city}`}</P.DeliveryText>
                  </P.Delivery>
                  <P.Delivery>
                     <P.DeliveryLabel>Recipient data:</P.DeliveryLabel>
                     <P.DeliveryText>{order.deliveryData.recipient}</P.DeliveryText>
                     <P.DeliveryText>e-mail: {order.deliveryData.email}</P.DeliveryText>
                     <P.DeliveryText>Tel.No.: {order.deliveryData.phone}</P.DeliveryText>
                  </P.Delivery>
               </P.DeliveryDetails>
               <P.ProductsList>
                  {order.products.map((product) => (
                     <P.Product>
                        <P.ProductImage src={User} />
                        <P.ProductName>{product.name}</P.ProductName>
                        <P.ProductInfo>{product.quantity} pcs.</P.ProductInfo>
                        <P.ProductInfo>$ {product.price}</P.ProductInfo>
                     </P.Product>
                  ))}
                  <P.SummaryWrapper>
                     <P.AdditionalCosts>
                        <P.ProductImage />
                        <P.ProductName />
                        <P.ProductInfo>Basket: </P.ProductInfo>
                        <P.ProductInfo>$ {order.basketPrice}</P.ProductInfo>
                     </P.AdditionalCosts>
                     <P.AdditionalCosts>
                        <P.ProductImage />
                        <P.ProductName />
                        <P.ProductInfo>Delivery: </P.ProductInfo>
                        <P.ProductInfo>$ {order.deliveryCost}</P.ProductInfo>
                     </P.AdditionalCosts>
                     <P.AdditionalCosts>
                        <P.ProductImage />
                        <P.ProductName />
                        <P.ProductInfo>Payment: </P.ProductInfo>
                        <P.ProductInfo>$ {order.paymentCost}</P.ProductInfo>
                     </P.AdditionalCosts>
                     <P.Summary>
                        <P.ProductImage />
                        <P.ProductName />
                        <P.TotalInfo>Total: </P.TotalInfo>
                        <P.TotalInfo>$ {order.total}</P.TotalInfo>
                     </P.Summary>
                  </P.SummaryWrapper>
               </P.ProductsList>
            </P.OrderDetailsWrapper>
         </Collapsible>
      </P.Order>
   );
};

export default Orders;
