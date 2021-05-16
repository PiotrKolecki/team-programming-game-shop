import React from 'react';
import * as P from './parts'
import AccountWrapper from '../../AccountWrapper/AccountWrapper';

export const EmptyCart: React.FC = () => (
   <AccountWrapper pageTitle="cart" breadcrumbs={['Home', 'Profile', 'Cart']}>
      <P.EmptyCartWrapper>
         <P.Title>Your cart is empty</P.Title>
         <P.Subtitle>Add your first item to GameShop cart</P.Subtitle>
         <P.LinkAsButton to="/">Go to home page</P.LinkAsButton>
      </P.EmptyCartWrapper>
   </AccountWrapper>
);

export default EmptyCart;
