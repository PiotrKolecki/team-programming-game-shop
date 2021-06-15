import {
  FETCH_USER_REQUEST,
  FETCH_USER_SUCCESS,
  FETCH_USER_FAILURE,
  REGISTER_USER_REQUEST,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_FAILURE,
  LOGOUT_USER,
  CHECK_USER_TOKEN_REQUEST,
  CHECK_USER_TOKEN_SUCCESS,
  CHECK_USER_TOKEN_FAILURE,
} from "./actionTypes";

export interface IUser {
  token?: string;
  id?: string;
  userType?: string;
}

export interface UserState {
  pending: boolean;
  user: IUser | null;
  error: string | null;
  registrationSuccess: boolean | null;
}

export interface FetchUserPayload {
  login: string;
  password: string;
}

export interface FetchUserSuccessPayload {
  user: IUser;
}

export interface FetchUserFailurePayload {
  error: string;
}

export interface ChebkUserTokenSuccessPayload {
  user: IUser;
}

export interface ChebkUserTokenFailurePayload {
  error: string;
}

export interface RegisterUserPayload {
  mail: string;
  password: string;
  userType: string;
}

export interface RegisterUserSuccessPayload {
  registrationSuccess: boolean;
}

export interface RegisterUserFailurePayload {
  error: string;
}

export type FetchUserRequest = {
  type: typeof FETCH_USER_REQUEST;
  payload: FetchUserPayload;
};

export type FetchUserSuccess = {
  type: typeof FETCH_USER_SUCCESS;
  payload: FetchUserSuccessPayload;
};

export type FetchUserFailure = {
  type: typeof FETCH_USER_FAILURE;
  payload: FetchUserFailurePayload;
};

export type CheckUserTokenRequest = {
  type: typeof CHECK_USER_TOKEN_REQUEST;
};

export type CheckUserTokenSuccess = {
  type: typeof CHECK_USER_TOKEN_SUCCESS;
  payload: ChebkUserTokenSuccessPayload;
};

export type CheckUserTokenFailure = {
  type: typeof CHECK_USER_TOKEN_FAILURE;
  payload: ChebkUserTokenFailurePayload;
};

export type LogoutUser = {
  type: typeof LOGOUT_USER;
};

export type RegisterUserRequest = {
  type: typeof REGISTER_USER_REQUEST;
  payload: RegisterUserPayload;
};

export type RegisterUserSuccess = {
  type: typeof REGISTER_USER_SUCCESS;
  payload: RegisterUserSuccessPayload;
};

export type RegisterUserFailure = {
  type: typeof REGISTER_USER_FAILURE;
  payload: RegisterUserFailurePayload;
};

export type UserActions =
  | FetchUserRequest
  | FetchUserSuccess
  | FetchUserFailure
  | CheckUserTokenRequest
  | CheckUserTokenSuccess
  | CheckUserTokenFailure
  | LogoutUser
  | RegisterUserRequest
  | RegisterUserSuccess
  | RegisterUserFailure;
