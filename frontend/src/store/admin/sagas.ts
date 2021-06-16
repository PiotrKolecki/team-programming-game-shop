import { select, call, takeLatest } from "@redux-saga/core/effects";
import { addGame } from "../../services/client";
import {
    ADD_GAME,
} from "./index";
import { AddGame } from './types';
import { getTokenSelector } from '../user/selectors';

export function* addGameSaga(action: AddGame) {
  try {
    const { payload } = action;
    const token: string  = yield select(getTokenSelector);
    yield call(addGame, {...payload, token});

  } catch (error) {
    console.error(error);
  }
}

// eslint-disable-next-line import/no-anonymous-default-export
export default [takeLatest(ADD_GAME, addGameSaga)];
