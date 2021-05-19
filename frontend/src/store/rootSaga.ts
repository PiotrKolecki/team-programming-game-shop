import { all, fork } from "redux-saga/effects";

import userSaga from "./user/sagas";
import catalogue from './catalogue/sagas';

export function* rootSaga() {
  yield all([fork(userSaga), ...catalogue])
}
