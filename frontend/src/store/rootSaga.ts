import { all } from "redux-saga/effects";
import catalogue from './catalogue/sagas';

export function* rootSaga() {
  yield all([  
      ...catalogue,
  ]);
}
