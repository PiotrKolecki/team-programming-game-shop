import {
  GET_ORDERS_FAILURE,
  GET_ORDERS_REQUEST,
  GET_ORDERS_SUCCESS,
  SUBMIT_ORDER_FAILURE,
  SUBMIT_ORDER_REQUEST,
  SUBMIT_ORDER_SUCCESS,
} from "./actionTypes";

import { OrderState, OrdersActions } from "./types";

const initialState: OrderState = {
  orders: [],
  error: null,
  pending: false,
  completed: false,
};

const ordersReducer = (state = initialState, action: OrdersActions) => {
  switch (action.type) {
    case SUBMIT_ORDER_REQUEST:
      return {
        ...state,
        pending: true,
        completed: false,
      };
    case SUBMIT_ORDER_SUCCESS:
      return {
        ...state,
        pending: false,
        error: null,
        completed: true,
      };
    case SUBMIT_ORDER_FAILURE:
      return {
        ...state,
        pending: false,
        error: action.payload.error,
        completed: false,
      };
    case GET_ORDERS_REQUEST:
      return {
        ...state,
        pending: true,
        error: null,
      };
    case GET_ORDERS_SUCCESS:
      return {
        ...state,
        pending: false,
        error: null,
        orders: action.payload.orders,
      };
    case GET_ORDERS_FAILURE:
      return {
        ...state,
        pending: false,
        orders: [],
        error: action.payload.error,
      };
    default: {
      return {
        ...state,
      };
    }
  }
};

export default ordersReducer;
