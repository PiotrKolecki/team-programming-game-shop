import {
  GET_ORDERS_FAILURE,
  GET_ORDERS_REQUEST,
  GET_ORDERS_SUCCESS,
  SUBMIT_ORDER_FAILURE,
  SUBMIT_ORDER_REQUEST,
  SUBMIT_ORDER_SUCCESS,
} from "./actionTypes";

export interface IAddress {
  apartmentNumber?: string;
  buildingNumber: string;
  city: string;
  country: string;
  street: string;
  type: string;
  "zip-code": string;
}

export interface IDelivery {
  address: IAddress;
  email: string;
  firstName: string;
  lastName: string;
  method: string;
  phone: string;
}

export interface IOrderItem {
  id: number;
  quantity: number;
}

export interface IOrder {
  id?: number;
  date?: string;
  delivery: IDelivery;
  paymentMethod: string;
  customerId: number;
  paymentId?: number;
  status?: "Pending_payment" | "Completed" | "Canceled";
  items: Array<IOrderItem>;
  price?: number;
}

export interface OrderState {
  pending: boolean;
  orders: Array<IOrder>;
  error: string | null;
}

export interface SubmitOrderPayload {
  order: IOrder;
}

export interface SubmitOrderSuccessPayload {}

export interface SubmitOrderFailurePayload {
  error: string;
}

export interface GetOrdersPayload {
  customerId: string;
}

export interface GetOrdersSuccessPayload {
  orders: Array<IOrder>;
}

export interface GetOrdersFailurePayload {
  error: string;
}

export type SubmitOrderRequest = {
  type: typeof SUBMIT_ORDER_REQUEST;
  payload: SubmitOrderPayload;
};

export type SubmitOrderSuccess = {
  type: typeof SUBMIT_ORDER_SUCCESS;
  payload: SubmitOrderSuccessPayload;
};

export type SubmitOrderFailure = {
  type: typeof SUBMIT_ORDER_FAILURE;
  payload: SubmitOrderFailurePayload;
};

export type GetOrdersRequest = {
  type: typeof GET_ORDERS_REQUEST;
  payload: GetOrdersPayload;
};

export type GetOrdersSuccess = {
  type: typeof GET_ORDERS_SUCCESS;
  payload: GetOrdersSuccessPayload;
};

export type GetOrdersFailure = {
  type: typeof GET_ORDERS_FAILURE;
  payload: GetOrdersFailurePayload;
};

export type OrdersActions =
  | SubmitOrderRequest
  | SubmitOrderSuccess
  | SubmitOrderFailure
  | GetOrdersRequest
  | GetOrdersSuccess
  | GetOrdersFailure;
