import React, { useState } from 'react';
import { Form } from 'react-final-form';
import * as P from './parts'
import EmptyCart from './EmptyCart/EmptyCart';
import BasketStagesBar from './BasketStagesBar/BasketStagesBar';
import AccountWrapper from '../AccountWrapper/AccountWrapper';
import { CartStagesEnum } from './constants';
import ProductsList from './ProductsList/ProductsList';
import BasketSummary from './BasketSummary/BasketSummary';
import SingInNotification from './SingInNotification/SingInNotification';
import Delivery from './Delivery/Delivery';
import Payment from './Payment/Payment';

const mockBasket = {
   products: [
      {
         name: 'The wither wild hunt test długiej nazwy',
         producer: '2K Games',
         count: 1,
         price: 11.99,
      },
      {
         name: 'Wanted Racoon',
         producer: 'MAD Sprouts',
         count: 4,
         price: 10.99,
      }
   ],
   totalProductsPrice: 22.98,
}

export const Cart: React.FC = () => {
   // FIXME: set initial state depending on isUserAuth status
   const [stage, setStage] = useState(CartStagesEnum.completeCart);

   const onBasketComplete = (values: Record<string, string>) => {
      // FIXME: Send order to API
   }

   //FIXME: Chech isCartEmpty status
   if (false) {
      return <EmptyCart />;
   }

   return (
      <AccountWrapper pageTitle="cart" breadcrumbs={['Home', 'Profile', 'Cart']}>
         <P.CartWrapper>
            <BasketStagesBar currentStage={stage} />
            <Form onSubmit={onBasketComplete}>
               {({ handleSubmit }) => (
                  <form onSubmit={handleSubmit}>
                     <P.Row>
                        <ProductsList
                           products={mockBasket.products}
                           totalProductsPrice={mockBasket.totalProductsPrice}
                        />
                        <BasketSummary
                           totalProductsPrice={mockBasket.totalProductsPrice}
                        />
                     </P.Row>
                     <P.Row>
                        {stage === CartStagesEnum.singIn ? (
                           <SingInNotification />
                        ) : (
                           <>
                              <Delivery setStage={setStage} />
                              <Payment stage={stage} />
                           </>
                        )}
                     </P.Row>
                  </form>
               )}
            </Form>
         </P.CartWrapper>
      </AccountWrapper >
   );
};

export default Cart;
