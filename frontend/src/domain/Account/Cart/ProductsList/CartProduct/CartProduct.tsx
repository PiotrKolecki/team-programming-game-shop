import React from 'react';
import { Field } from 'react-final-form';
import * as P from './parts'
import User from '../../../../../assets/user.svg';
import bin from '../../../../../assets/bin.svg';

interface CartProductProps {
   product: any;
}

export const CartProduct: React.FC<CartProductProps> = ({ product }) => (
   <P.CartProductWrapper>
      <P.Image src={User} width={70} height={100} />
      <P.InfoWrapper>
         <P.ProductInfo>
            <P.Name>{product.name}</P.Name>
            <P.Producer>{product.producer}</P.Producer>
         </P.ProductInfo>
         <P.DeleteButton type="button">
            <P.Image src={bin} />
            <P.ButtonText>Delete</P.ButtonText>
         </P.DeleteButton>
      </P.InfoWrapper>
      <P.QuantityWrapper>
         <P.Label>Quantity</P.Label>
         {/* FIXME: Change product name to product id */}
         <Field name={`${product.name}.count`} component="select" initialValue={1}>
            {({ input }) => (
               <P.Select {...input}>
                  {Array(9).fill(1).map((_el, index) => (
                     <P.Option key={index} value={index + 1}>{index + 1}</P.Option>
                  ))}
               </P.Select>
            )}
         </Field>
      </P.QuantityWrapper>
      <P.Price>{`$ ${product.price}`}</P.Price>
   </P.CartProductWrapper>
);

export default CartProduct;
