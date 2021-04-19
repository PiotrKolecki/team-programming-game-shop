import React from 'react';
import * as P from './parts'
import AccountWrapper from '../AccountWrapper/AccountWrapper';
import Order from './Order/Order';

// FIXME: use selector to get info about orders
const mockData = [
   {
      id: '1',
      date: '24/03/2021',
      products: [
         {
            id: '12',
            name: 'The Withcer',
            price: '19.99',
            quantity: 1,
         }
      ],
      delivery: 'DHL',
      deliveryCost: '7.99',
      payment: 'BLIK',
      paymentCost: '0.99',
      status: 'Ordered',
      total: '26.98',
      basketPrice: '112.33',
      deliveryData: {
         recipient: 'Example Mock',
         email: 'example@mock.pl',
         phone: 123456789,
         street: 'Example st. 16/77',
         city: 'Mock City',
         zipCode: '12-123',
      }
   },
   {
      id: '2',
      date: '21/04/2019',
      products: [
         {
            id: '12',
            name: 'The Withcer',
            price: '19.99',
            quantity: 1,
         },
         {
            id: '12',
            name: 'Cyberpunk',
            price: '139.99',
            quantity: 3,
         },
      ],
      delivery: 'DPD',
      deliveryCost: '10.99',
      payment: 'VISA',
      paymentCost: '0.99',
      status: 'Delivered',
      total: '112.98',
      basketPrice: '112.33',
      deliveryData: {
         recipient: 'Example Mock',
         email: 'example@mock.pl',
         phone: 123456789,
         street: 'Example st. 16/77',
         city: 'Mock City',
         zipCode: '12-123',
      }
   },
   {
      id: '1',
      date: '24/03/2021',
      products: [
         {
            id: '12',
            name: 'The Withcer',
            price: '19.99',
            quantity: 1,
         }
      ],
      delivery: 'DHL',
      deliveryCost: '7.99',
      payment: 'BLIK',
      paymentCost: '0.99',
      status: 'Ordered',
      total: '26.98',
      basketPrice: '112.33',
      deliveryData: {
         recipient: 'Example Mock',
         email: 'example@mock.pl',
         phone: 123456789,
         street: 'Example st. 16/77',
         city: 'Mock City',
         zipCode: '12-123',
      }
   },
   {
      id: '2',
      date: '21/04/2019',
      products: [
         {
            id: '12',
            name: 'The Withcer',
            price: '19.99',
            quantity: 1,
         },
         {
            id: '12',
            name: 'Cyberpunk',
            price: '39.99',
            quantity: 3,
         },
      ],
      delivery: 'DPD',
      deliveryCost: '10.99',
      payment: 'VISA',
      paymentCost: '0.99',
      status: 'Delivered',
      total: '112.98',
      basketPrice: '112.33',
      deliveryData: {
         recipient: 'Example Mock',
         email: 'example@mock.pl',
         phone: 123456789,
         street: 'Example st. 16/77',
         city: 'Mock City',
         zipCode: '12-123',
      }
   },
   {
      id: '1',
      date: '24/03/2021',
      products: [
         {
            id: '12',
            name: 'The Withcer',
            price: '19.99',
            quantity: 1,
         }
      ],
      delivery: 'DHL',
      deliveryCost: '7.99',
      payment: 'BLIK',
      paymentCost: '0.99',
      status: 'Ordered',
      total: '26.98',
      basketPrice: '112.33',
      deliveryData: {
         recipient: 'Example Mock',
         email: 'example@mock.pl',
         phone: 123456789,
         street: 'Example st. 16/77',
         city: 'Mock City',
         zipCode: '12-123',
      }
   },
   {
      id: '2',
      date: '21/04/2019',
      products: [
         {
            id: '12',
            name: 'The Withcer',
            price: '19.99',
            quantity: 1,
         },
         {
            id: '12',
            name: 'Cyberpunk',
            price: '39.99',
            quantity: 3,
         },
      ],
      delivery: 'DPD',
      deliveryCost: '10.99',
      payment: 'VISA',
      paymentCost: '0.99',
      status: 'Delivered',
      total: '112.98',
      basketPrice: '112.33',
      deliveryData: {
         recipient: 'Example Mock',
         email: 'example@mock.pl',
         phone: 123456789,
         street: 'Example st. 16/77',
         city: 'Mock City',
         zipCode: '12-123',
      }
   },
]

export const Orders: React.FC = () => (
   <AccountWrapper pageTitle="orders" breadcrumbs={['Home', 'Profile', 'Orders']}>
      <P.OrdersWrapper>
         <P.Header>
            <P.Label>Order number</P.Label>
            <P.Label>Date</P.Label>
            <P.Label>Delivery method</P.Label>
            <P.Label>Payment method</P.Label>
            <P.Label>Total price</P.Label>
            <P.Label>Status</P.Label>
            <P.Label />
         </P.Header>
         {mockData.map((order) => <Order order={order} />)}
      </P.OrdersWrapper>
   </AccountWrapper>
);

export default Orders;
