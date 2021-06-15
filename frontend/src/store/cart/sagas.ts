import { call, put, takeLatest, select, all } from "redux-saga/effects";
import { addItemToCart, getItemsFromCart, deleteItemFromCart } from "../../services/client";
import { getUserIdSelector, getTokenSelector } from '../user/selectors';
import {
    ADD_ITEM,
    GET_ITEMS,
    DELETE_ITEM,
    addItemSuccess,
    addItemError,
} from "./index";
import { AddItemToCart, GetItemsFromCart, Item, DeleteItemFromCart } from './types';

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

export function* deleteItemSaga(action: DeleteItemFromCart) {
  try {
    const id: number  = yield select(getUserIdSelector);
    const token: string  = yield select(getTokenSelector);
    yield call(deleteItemFromCart, { id, token, product_id: action.payload.id });

  } catch (error) {
    yield put(addItemError({ error }));
  }
}


function* cartSaga() {
  yield all([
    takeLatest(ADD_ITEM, addItemSaga),
    takeLatest(GET_ITEMS, getItemsSaga),
    takeLatest(DELETE_ITEM, deleteItemSaga),
  ]);
}

export default cartSaga;



