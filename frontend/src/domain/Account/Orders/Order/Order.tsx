import React, { useState } from "react";
import { useSelector } from "react-redux";
import Collapsible from "react-collapsible";
import * as P from "./parts";
import AdditionalCosts from "./AdditionalCosts";
import Trigger from "./Trigger/Trigger";
import User from "../../../../assets/user.svg";
import { getOrderedItems } from "../../../../store/orders/selectors";
import { IAddress, IDelivery, IOrder } from "../../../../store/orders/types";
import { DELIVERY_FEE, PAYMENT_FEE } from "../../Cart/constants";
import { AppState } from "../../../../store/rootReducer";

interface OrderProps {
  order: IOrder;
}

//TODO: fetch info about items from backend
export const Orders: React.FC<OrderProps> = ({ order }) => {
  const orderedItems = useSelector((state: AppState) => getOrderedItems(state, order));

  const [isOpen, setIsOpen] = useState(false);

  const { delivery = {} as IDelivery } = order;
  const { address = {} as IAddress } = delivery;

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
              <P.DeliveryText>{address.street}</P.DeliveryText>
              <P.DeliveryText>{`${address["zip-code"]}  ${address.city}`}</P.DeliveryText>
            </P.Delivery>
            <P.Delivery>
              <P.DeliveryLabel>Recipient data:</P.DeliveryLabel>
              <P.DeliveryText>
                {delivery.firstName} {delivery.lastName}
              </P.DeliveryText>
              <P.DeliveryText>e-mail: {delivery.email}</P.DeliveryText>
              <P.DeliveryText>Tel.No.: {delivery.phone}</P.DeliveryText>
            </P.Delivery>
          </P.DeliveryDetails>
          <P.ProductsList>
            {(orderedItems || []).map((item) => (
              <P.Product>
                <P.ProductImage src={User} />

                <P.ProductName>{item.product_name}'</P.ProductName>
                <P.ProductInfo>{item.quantity} pcs.</P.ProductInfo>
                <P.ProductInfo>{item.price}</P.ProductInfo>
              </P.Product>
            ))}
            <P.SummaryWrapper>
              <AdditionalCosts
                label={"Basket"}
                value={order.price?.toString() || ""}
              />
              <AdditionalCosts
                label={"Delivery"}
                value={DELIVERY_FEE.toString()}
              />
              <AdditionalCosts
                label={"Payment"}
                value={PAYMENT_FEE.toString()}
              />
              <P.Summary>
                <P.ProductImage />
                <P.ProductName />
                <P.TotalInfo>Total: </P.TotalInfo>
                <P.TotalInfo>
                  $ {order.price || 0 + DELIVERY_FEE + PAYMENT_FEE}
                </P.TotalInfo>
              </P.Summary>
            </P.SummaryWrapper>
          </P.ProductsList>
        </P.OrderDetailsWrapper>
      </Collapsible>
    </P.Order>
  );
};

export default Orders;
