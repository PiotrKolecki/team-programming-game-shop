import { all, fork } from "redux-saga/effects";

import userSaga from "./user/sagas";
import ordersSaga from "./orders/sagas";
import catalogue from "./catalogue/sagas";
import cart from './cart/sagas';

export function* rootSaga() {
  yield all([fork(userSaga), fork(ordersSaga), ...catalogue, fork(cart)]);
}
