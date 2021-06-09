import React from "react";
import { Product } from "../Cart";
import CartProduct, {
  onDeleteProductHandler,
  onProductCountChangeHandler,
} from "./CartProduct/CartProduct";
import * as P from "./parts";

interface ProductsListProps {
  products: Array<Product>;
  totalProductsPrice: number;
  onDeleteProduct: onDeleteProductHandler;
  onProductCountChange: onProductCountChangeHandler;
}

export const ProductsList: React.FC<ProductsListProps> = ({
  products,
  totalProductsPrice,
  onDeleteProduct,
  onProductCountChange,
}) => (
  <P.ProductsListWrapper>
    <P.ProductsWrapper>
      {products.map((product) => {
        return (
          <CartProduct
            key={product.id}
            product={product}
            onDeleteProduct={onDeleteProduct}
            onProductCountChange={onProductCountChange}
          />
        );
      })}
    </P.ProductsWrapper>
    <P.SummaryWrapper>
      <P.Label>Total</P.Label>
      <P.TotalPrice>$ {totalProductsPrice.toFixed(2)}</P.TotalPrice>
    </P.SummaryWrapper>
  </P.ProductsListWrapper>
);

export default ProductsList;
