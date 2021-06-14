import { call, put, takeLatest, select, all } from "redux-saga/effects";
import { addItemToCart, getItemsFromCart } from "../../services/client";
import { getUserIdSelector, getTokenSelector } from '../user/selectors';
import {
    ADD_ITEM,
    GET_ITEMS,
    addItemSuccess,
    addItemError,
} from "./index";
import { AddItemToCart, GetItemsFromCart, Item } from './types';


export function* addItemSaga(action: AddItemToCart) {
  try {
    const id: number  = yield select(getUserIdSelector);
    const token: string  = yield select(getTokenSelector);
    const { payload: { product_id, quantity } } = action;
    const cart: Item = yield call(addItemToCart, { id, product_id, quantity, token });

    yield put(addItemSuccess(cart));
  } catch (error) {
    yield put(addItemError({ error }));
  }
}

export function* getItemsSaga(action: GetItemsFromCart) {
  try {
    const id: number  = yield select(getUserIdSelector);
    const token: string  = yield select(getTokenSelector);
    const cart: Item = yield call(getItemsFromCart, { id, token });
    yield put(addItemSuccess(cart));
  } catch (error) {
    yield put(addItemError({ error }));
  }
}

function* cartSaga() {
  yield all([
    takeLatest(ADD_ITEM, addItemSaga),
    takeLatest(GET_ITEMS, getItemsSaga),
  ]);
}

export default cartSaga;



