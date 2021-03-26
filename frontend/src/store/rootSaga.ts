import { all, fork } from "redux-saga/effects";

function* mockedSaga() {
  yield all([]);
}

export function* rootSaga() {
  yield all([
    fork(
      // SAGAS to put here
      mockedSaga
    ),
  ]);
}
