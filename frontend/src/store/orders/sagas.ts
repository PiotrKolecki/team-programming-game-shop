import axios from "../../config/axios";
import { all, call, put, takeLatest } from "redux-saga/effects";
import { AxiosResponse } from "axios";
import {
  GetOrdersPayload,
  GetOrdersRequest,
  IOrder,
  SubmitOrderPayload,
  SubmitOrderRequest,
} from "./types";
import {
  getOrdersFailure,
  getOrdersSuccess,
  submitOrderFailure,
  submitOrderSuccess,
} from "./actions";
import { GET_ORDERS_REQUEST, SUBMIT_ORDER_REQUEST } from "./actionTypes";

const submitOrderCall = (payload: SubmitOrderPayload) =>
  axios
    .post<IOrder, AxiosResponse<IOrder>>("orders/", payload.order)
    .then((response) => response.data.paymentId)
    .then((paymentId) => {
      axios.post(`payment/${paymentId}`, {});
    });

const getOrdersCall = (payload: GetOrdersPayload) =>
  axios
    .get<Array<IOrder>>(`orders/customer/${payload.customerId}`)
    .then((response) => response.data);

function* submitOrder(action: SubmitOrderRequest) {
  try {
    yield call(submitOrderCall, action.payload);
    yield put(submitOrderSuccess({ copleted: true }));
  } catch (e) {
    yield put(
      submitOrderFailure({
        error: e.message,
      })
    );
  }
}

function* getOrders(action: GetOrdersRequest) {
  try {
    const response = (yield call(
      getOrdersCall,
      action.payload
    )) as Array<IOrder>;
    yield put(
      getOrdersSuccess({
        orders: response,
      })
    );
  } catch (e) {
    yield put(
      getOrdersFailure({
        error: e.message,
      })
    );
  }
}

function* ordersSaga() {
  yield all([
    takeLatest(SUBMIT_ORDER_REQUEST, submitOrder),
    takeLatest(GET_ORDERS_REQUEST, getOrders),
  ]);
}

export default ordersSaga;
