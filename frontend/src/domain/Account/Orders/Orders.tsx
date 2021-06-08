import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as P from "./parts";
import AccountWrapper from "../AccountWrapper/AccountWrapper";
import Order from "./Order/Order";
import { getOrdersSelector } from "../../../store/orders/selectors";
import { getOrdersRequest } from "../../../store/orders/actions";
import { getUserIdSelector } from "../../../store/user/selectors";

export const Orders: React.FC = () => {
  const dispatch = useDispatch();
  const orders = useSelector(getOrdersSelector);
  const customerId = useSelector(getUserIdSelector);

  useEffect(() => {
    if (customerId) {
      dispatch(getOrdersRequest({ customerId }));
    }
  }, [customerId, dispatch]);

  return (
    <AccountWrapper
      pageTitle="orders"
      breadcrumbs={["Home", "Profile", "Orders"]}
    >
      <P.OrdersWrapper>
        <P.Header>
          <P.Label>Order number</P.Label>
          <P.Label>Date</P.Label>
          <P.Label>Delivery method</P.Label>
          <P.Label>Payment method</P.Label>
          <P.Label>Total price</P.Label>
          <P.Label>Status</P.Label>
        </P.Header>
        {orders.map((order) => (
          <Order order={order} />
        ))}
      </P.OrdersWrapper>
    </AccountWrapper>
  );
};

export default Orders;
