import { call, put, takeLatest, select } from "redux-saga/effects";
import { addItemToCart } from "../../services/client";
import { getUserIdSelector, getTokenSelector } from '../user/selectors';
import {
    ADD_ITEM,
    addItemSuccess,
    addItemError,
} from "./index";
import { AddItemToCart, AddItemSuccessPayload } from './types';


export function* addItemSaga(payload: AddItemToCart) {
  try {
    console.log('aaaa');
    const id: number  = yield select(getUserIdSelector);
    const token: string  = yield select(getTokenSelector);
    const { payload: { product_id, quantity } } = payload;
    const cart: AddItemSuccessPayload = yield call(addItemToCart, { id, product_id, quantity, token });
    console.log('bbbbbb ', cart);

    yield put(addItemSuccess(cart));
  } catch (error) {
    yield put(addItemError({ error }));
  }
}

// eslint-disable-next-line import/no-anonymous-default-export
export default [takeLatest(ADD_ITEM, addItemSaga)];
