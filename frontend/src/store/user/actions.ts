import {
  FETCH_USER_REQUEST,
  FETCH_USER_SUCCESS,
  FETCH_USER_FAILURE,
  REGISTER_USER_REQUEST,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_FAILURE,
  LOGOUT_USER,
} from "./actionTypes";
import {
  FetchUserRequest,
  FetchUserPayload,
  FetchUserSuccess,
  FetchUserSuccessPayload,
  FetchUserFailure,
  FetchUserFailurePayload,
  RegisterUserRequest,
  RegisterUserSuccess,
  RegisterUserSuccessPayload,
  RegisterUserFailure,
  RegisterUserFailurePayload,
  RegisterUserPayload,
  LogoutUser,
} from "./types";

export const LS_TOKEN_ID = "TOKEN";

export const fetchUserRequest = (
  payload: FetchUserPayload
): FetchUserRequest => ({
  type: FETCH_USER_REQUEST,
  payload,
});

export const fetchUserSuccess = (
  payload: FetchUserSuccessPayload
): FetchUserSuccess => {
  if (payload.user.token) {
    localStorage.setItem(LS_TOKEN_ID, payload.user.token);
  }
  return {
    type: FETCH_USER_SUCCESS,
    payload,
  };
};

export const fetchUserFailure = (
  payload: FetchUserFailurePayload
): FetchUserFailure => {
  localStorage.removeItem(LS_TOKEN_ID);
  return {
    type: FETCH_USER_FAILURE,
    payload,
  };
};

export const registerUserRequest = (
  payload: RegisterUserPayload
): RegisterUserRequest => ({
  type: REGISTER_USER_REQUEST,
  payload,
});

export const registerUserSuccess = (
  payload: RegisterUserSuccessPayload
): RegisterUserSuccess => ({
  type: REGISTER_USER_SUCCESS,
  payload,
});

export const registerUserFailure = (
  payload: RegisterUserFailurePayload
): RegisterUserFailure => ({
  type: REGISTER_USER_FAILURE,
  payload,
});

export const logoutUser = (): LogoutUser => {
  localStorage.removeItem(LS_TOKEN_ID);
  return {
    type: LOGOUT_USER,
  };
};
