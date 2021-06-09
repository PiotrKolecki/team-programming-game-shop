import { AppState } from "../rootReducer";

export const getPendingSelector = (state: AppState) => state.orders.pending;

export const getErrorSelector = (state: AppState) => state.orders.error;

export const getOrdersSelector = (state: AppState) => state.orders.orders;
