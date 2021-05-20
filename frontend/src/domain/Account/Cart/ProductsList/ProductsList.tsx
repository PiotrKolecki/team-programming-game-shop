import React from 'react';
import CartProduct from './CartProduct/CartProduct';
import * as P from './parts'

interface ProductsListProps {
   products: any[];
   totalProductsPrice: number;
}

export const ProductsList: React.FC<ProductsListProps> = ({
   products,
   totalProductsPrice,
}) => (
   <P.ProductsListWrapper>
      <P.ProductsWrapper>
         {products.map((product) => <CartProduct key={product.name} product={product} />)}
      </P.ProductsWrapper>
      <P.SummaryWrapper>
         <P.Label>Total</P.Label>
         <P.TotalPrice>$ {totalProductsPrice}</P.TotalPrice>
      </P.SummaryWrapper>
   </P.ProductsListWrapper>
);

export default ProductsList;
