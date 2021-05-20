import axios from "../../config/axios";
import { all, call, put, takeLatest } from "redux-saga/effects";

import {
  fetchUserSuccess,
  fetchUserFailure,
  registerUserSuccess,
  registerUserFailure,
} from "./actions";
import { FETCH_USER_REQUEST, REGISTER_USER_REQUEST } from "./actionTypes";
import {
  FetchUserRequest,
  FetchUserPayload,
  RegisterUserRequest,
  RegisterUserPayload,
  IUser,
} from "./types";
import { AxiosResponse } from "axios";

const fetchUserCall = (payload: FetchUserPayload) =>
  axios.post<IUser>("auth/authenticate", payload);

const registerUserCall = (payload: RegisterUserPayload) =>
  axios.post("auth/register", payload);

function* fetchUser(action: FetchUserRequest) {
  try {
    const response = (yield call(
      fetchUserCall,
      action.payload
    )) as AxiosResponse<IUser>;
    yield put(
      fetchUserSuccess({
        user: response.data,
      })
    );
  } catch (e) {
    yield put(
      fetchUserFailure({
        error: e.message,
      })
    );
  }
}

function* registerUser(action: RegisterUserRequest) {
  try {
    yield call(registerUserCall, action.payload);
    yield put(
      registerUserSuccess({
        registrationSuccess: true,
      })
    );
  } catch (e) {
    yield put(
      registerUserFailure({
        error: e.message,
      })
    );
  }
}

function* userSaga() {
  yield all([
    takeLatest(FETCH_USER_REQUEST, fetchUser),
    takeLatest(REGISTER_USER_REQUEST, registerUser),
  ]);
}

export default userSaga;
