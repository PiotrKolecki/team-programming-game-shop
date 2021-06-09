import React from "react";
import { Field } from "react-final-form";
import * as P from "./parts";
import User from "../../../../../assets/user.svg";
import bin from "../../../../../assets/bin.svg";
import { Product } from "../../Cart";

export type onDeleteProductHandler = (id: number) => void;
export type onProductCountChangeHandler = (id: number, count: number) => void;

type CartProductProps = {
  product: Product;
  onDeleteProduct: onDeleteProductHandler;
  onProductCountChange: onProductCountChangeHandler;
};

export const CartProduct: React.FC<CartProductProps> = ({
  product,
  onDeleteProduct,
  onProductCountChange,
}) => (
  <P.CartProductWrapper>
    <P.Image src={User} width={70} height={100} />
    <P.InfoWrapper>
      <P.ProductInfo>
        <P.Name>{product.name}</P.Name>
        <P.Producer>{product.producer}</P.Producer>
      </P.ProductInfo>
      <P.DeleteButton type="button" onClick={() => onDeleteProduct(product.id)}>
        <P.Image src={bin} />
        <P.ButtonText>Delete</P.ButtonText>
      </P.DeleteButton>
    </P.InfoWrapper>
    <P.QuantityWrapper>
      <P.Label>Quantity</P.Label>
      <Field
        name={`product-${product.id}.count`}
        component="select"
        value={product.count}
      >
        {({ input }) => (
          <P.Select
            {...input}
            value={product.count}
            onChange={(e) =>
              onProductCountChange(product.id, Number.parseInt(e.target.value))
            }
          >
            {Array(9)
              .fill(1)
              .map((_el, index) => (
                <P.Option key={index} value={index + 1}>
                  {index + 1}
                </P.Option>
              ))}
          </P.Select>
        )}
      </Field>
    </P.QuantityWrapper>
    <P.Price>{`$ ${product.price}`}</P.Price>
  </P.CartProductWrapper>
);

export default CartProduct;
