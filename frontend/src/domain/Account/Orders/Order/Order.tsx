import React, { useState } from 'react';
import Collapsible from 'react-collapsible';
import * as P from './parts';
import AdditionalCosts from './AdditionalCosts';
import Trigger from './Trigger/Trigger';
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

   return (
      <P.Order>
         <Collapsible
            trigger={<Trigger order={order} isOpen={isOpen} />}
            transitionTime={220}
            onOpening={() => setIsOpen(true)}
            onClosing={() => setIsOpen(false)}
         >
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
                     <AdditionalCosts label={'Basket'} value={order.basketPrice} />
                     <AdditionalCosts label={'Delivery'} value={order.deliveryCost} />
                     <AdditionalCosts label={'Payment'} value={order.paymentCost} />
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
