import React, { useState, useMemo, useEffect, useLayoutEffect } from "react";
import { Form } from "react-final-form";
import { useDispatch, useSelector } from "react-redux";
import * as P from "./parts";
import EmptyCart from "./EmptyCart/EmptyCart";
import BasketStagesBar from "./BasketStagesBar/BasketStagesBar";
import AccountWrapper from "../AccountWrapper/AccountWrapper";
import { CartStagesEnum, DeliveryOptions, pickupAddress } from "./constants";
import ProductsList from "./ProductsList/ProductsList";
import BasketSummary from "./BasketSummary/BasketSummary";
import SingInNotification from "./SingInNotification/SingInNotification";
import Delivery from "./Delivery/Delivery";
import Payment from "./Payment/Payment";
import { IGame } from "../../../store/catalogue/types";
import {
  getTokenSelector,
  getUserIdSelector,
} from "../../../store/user/selectors";
import { submitOrderRequest } from "../../../store/orders/actions";
import { IOrder } from "../../../store/orders/types";
import { getItems } from "../../../store/cart/index";
import { getUserItems, getCartForUser } from "../../../store/cart/selectors";
import { catalogueFetch } from "../../../store/catalogue/index"
import { AppState } from "../../../store/rootReducer";
import { deleteItem } from "../../../store/cart/index";

export interface Product extends IGame {
  count: number;
}



export const Cart: React.FC = () => {
  const [stage, setStage] = useState(CartStagesEnum.singIn);

  const customerId = useSelector(getUserIdSelector);
  const cart = useSelector((state: AppState) => getUserItems(state, customerId));
  const cartForUser = useSelector((state: AppState) => getCartForUser(state, customerId));
  const [products, setProducts] = useState(cart);
  console.log(cart, products);
  const [deliveryOption, setDeliveryOption] = useState<
    DeliveryOptions | undefined
  >(undefined);
  const token = useSelector(getTokenSelector);
  const dispatch = useDispatch();

  useLayoutEffect(() => {
    if (token) {
      setStage(CartStagesEnum.completeCart);
    } else {
      setStage(CartStagesEnum.singIn);
    }
  }, [token]);

  useEffect(() => {
    if (token && stage === CartStagesEnum.singIn) {
      setStage(CartStagesEnum.completeCart);
    } else if (!token) {
      setStage(CartStagesEnum.singIn);
    }
  }, [token, stage]);

  useEffect(() => {
    if(!products.length){
      setProducts(cart);
    }
  }, [cart])

  useEffect(() => {
    if(!cartForUser.length){
      dispatch(getItems());
    }
    dispatch(catalogueFetch());
  }, [cartForUser.length, dispatch])

  const memoizedTotalPrice = useMemo(
    () =>
      products.reduce(
        (total, product) => total + product.count * product.price,
        0
      ),
    [products]
  );

  const handleDeleteProduct = (id: number) => {
    setProducts(products.filter((product) => product.id !== id));
    dispatch(deleteItem({ id, customer_id: customerId }));
  };

  const handleChangeProductCount = (id: number, count: number) => {
    setProducts((prevProducts) => {
      const index = prevProducts.findIndex((product) => product.id === id)!;
      const updatedProduct = { ...prevProducts[index], count };
      return Object.assign([], prevProducts, { [index]: updatedProduct });
    });
  };

  const onBasketComplete = (form: Record<string, any>) => {
    const items = products.map((product) => ({
      id: product.id,
      quantity: product.count,
    }));
    const delivery = form.delivery as Record<string, any>;
    const deliveryMethod =
      deliveryOption === DeliveryOptions.homeAddress ? "Kurier" : "Paczkomaty";

    const address =
      deliveryOption === DeliveryOptions.homeAddress
        ? (delivery.address as Record<string, any>)
        : pickupAddress;

    const order = ({
      ...form,
      delivery: {
        ...delivery,
        method: deliveryMethod,
        address: {
          ...address,
          type: deliveryOption,
        },
      },
      items,
      customerId,
    } as unknown) as IOrder;
    dispatch(submitOrderRequest({ order }));
  };

  //FIXME: Chech isCartEmpty status
  if (false) {
    return <EmptyCart />;
  }

  return (
    <AccountWrapper pageTitle="cart" breadcrumbs={["Home", "Profile", "Cart"]}>
      <P.CartWrapper>
        <BasketStagesBar currentStage={stage} />
        <Form onSubmit={onBasketComplete}>
          {({ handleSubmit }) => (
            <form onSubmit={handleSubmit}>
              <P.Row>
                <ProductsList
                  products={products}
                  totalProductsPrice={memoizedTotalPrice}
                  onDeleteProduct={handleDeleteProduct}
                  onProductCountChange={handleChangeProductCount}
                />
                <BasketSummary totalProductsPrice={memoizedTotalPrice} />
              </P.Row>
              <P.Row>
                {stage === CartStagesEnum.singIn ? (
                  <SingInNotification />
                ) : (
                  <>
                    <Delivery
                      setStage={setStage}
                      deliveryOption={deliveryOption}
                      onDeliveryOptionChange={setDeliveryOption}
                    />
                    <Payment stage={stage} />
                  </>
                )}
              </P.Row>
            </form>
          )}
        </Form>
      </P.CartWrapper>
    </AccountWrapper>
  );
};

export default Cart;
