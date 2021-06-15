import axios from "../../config/axios";
import { checkUserTokenFailure, checkUserTokenSuccess, LS_TOKEN_ID } from "../user/actions";
import { all, call, put, takeLatest } from "redux-saga/effects";

import {
  fetchUserSuccess,
  fetchUserFailure,
  registerUserSuccess,
  registerUserFailure,
} from "./actions";
import { CHECK_USER_TOKEN_REQUEST, FETCH_USER_REQUEST, REGISTER_USER_REQUEST } from "./actionTypes";
import {
  FetchUserRequest,
  FetchUserPayload,
  RegisterUserRequest,
  RegisterUserPayload,
  IUser,
} from "./types";
import { AxiosResponse } from "axios";

const fetchUserCall = (payload: FetchUserPayload) =>
  axios
    .post<FetchUserPayload, AxiosResponse<IUser>>("auth/authenticate", payload)
    .then(({ data }) =>
      axios
        .post("auth/checkToken", data, {
          headers: { Authorization: `Token ${data.token}` },
        })
        .then((response) => ({
          ...data,
          ...response.data,
        }))
    );

const registerUserCall = (payload: RegisterUserPayload) =>
  axios.post("auth/register", payload);

const checkUserTokenCall = (token: string) => (
  axios.post<{}, AxiosResponse<IUser>>("auth/checkToken", { token }).then(({ data }) => data)
)

function* fetchUser(action: FetchUserRequest) {
  try {
    const response = (yield call(fetchUserCall, action.payload)) as IUser;
    yield put(
      fetchUserSuccess({
        user: response,
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

function* checkUserToken() {
  const userLocalStorageToken = localStorage.getItem(LS_TOKEN_ID) as string;

  try {
    const response = (yield call(checkUserTokenCall, userLocalStorageToken)) as IUser;
    
    yield put(
      checkUserTokenSuccess({
        user: {
          ...response,
          token: userLocalStorageToken,
        },
      })
    );
  } catch (e) {
    yield put(
      checkUserTokenFailure({
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
    takeLatest(CHECK_USER_TOKEN_REQUEST, checkUserToken),
    takeLatest(REGISTER_USER_REQUEST, registerUser),
  ]);
}

export default userSaga;
