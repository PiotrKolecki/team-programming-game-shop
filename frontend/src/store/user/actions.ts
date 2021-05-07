import {
  FETCH_USER_REQUEST,
  FETCH_USER_SUCCESS,
  FETCH_USER_FAILURE,
  REGISTER_USER_REQUEST,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_FAILURE,
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
} from "./types";

export const fetchUserRequest = (
  payload: FetchUserPayload
): FetchUserRequest => ({
  type: FETCH_USER_REQUEST,
  payload,
});

export const fetchUserSuccess = (
  payload: FetchUserSuccessPayload
): FetchUserSuccess => ({
  type: FETCH_USER_SUCCESS,
  payload,
});

export const fetchUserFailure = (
  payload: FetchUserFailurePayload
): FetchUserFailure => ({
  type: FETCH_USER_FAILURE,
  payload,
});

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
