import {
  GET_ORDERS_FAILURE,
  GET_ORDERS_REQUEST,
  GET_ORDERS_SUCCESS,
  SUBMIT_ORDER_FAILURE,
  SUBMIT_ORDER_REQUEST,
  SUBMIT_ORDER_SUCCESS,
} from "./actionTypes";
import {
  SubmitOrderPayload,
  SubmitOrderRequest,
  SubmitOrderSuccess,
  SubmitOrderSuccessPayload,
  SubmitOrderFailurePayload,
  SubmitOrderFailure,
  GetOrdersPayload,
  GetOrdersRequest,
  GetOrdersSuccess,
  GetOrdersSuccessPayload,
  GetOrdersFailurePayload,
  GetOrdersFailure,
} from "./types";

export const submitOrderRequest = (
  payload: SubmitOrderPayload
): SubmitOrderRequest => ({
  type: SUBMIT_ORDER_REQUEST,
  payload,
});

export const submitOrderSuccess = (
  payload: SubmitOrderSuccessPayload
): SubmitOrderSuccess => ({
  type: SUBMIT_ORDER_SUCCESS,
  payload,
});

export const submitOrderFailure = (
  payload: SubmitOrderFailurePayload
): SubmitOrderFailure => ({
  type: SUBMIT_ORDER_FAILURE,
  payload,
});

export const getOrdersRequest = (
  payload: GetOrdersPayload
): GetOrdersRequest => ({
  type: GET_ORDERS_REQUEST,
  payload,
});

export const getOrdersSuccess = (
  payload: GetOrdersSuccessPayload
): GetOrdersSuccess => ({
  type: GET_ORDERS_SUCCESS,
  payload,
});

export const getOrdersFailure = (
  payload: GetOrdersFailurePayload
): GetOrdersFailure => ({
  type: GET_ORDERS_FAILURE,
  payload,
});
