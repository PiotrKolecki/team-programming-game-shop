import {
  FETCH_USER_REQUEST,
  FETCH_USER_SUCCESS,
  FETCH_USER_FAILURE,
  REGISTER_USER_REQUEST,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_FAILURE,
  LOGOUT_USER,
  CHECK_USER_TOKEN_SUCCESS,
  CHECK_USER_TOKEN_FAILURE,
  CHECK_USER_TOKEN_REQUEST,
} from "./actionTypes";

import { UserActions, UserState } from "./types";

const initialState: UserState = {
  pending: false,
  error: null,
  registrationSuccess: null,
  user: null,
};

const userReducer = (state = initialState, action: UserActions) => {
  switch (action.type) {
    case FETCH_USER_REQUEST:
    case CHECK_USER_TOKEN_REQUEST:
      return {
        ...state,
        registrationSuccess: null,
        pending: true,
      };
    case FETCH_USER_SUCCESS:
    case CHECK_USER_TOKEN_SUCCESS:
      return {
        ...state,
        pending: false,
        user: action.payload.user,
        error: null,
      };
    case FETCH_USER_FAILURE:
      return {
        ...state,
        pending: false,
        user: null,
        error: action.payload.error,
      };
    case CHECK_USER_TOKEN_FAILURE:
      return {
        ...state,
        pending: false,
        user: null,
      };
    case LOGOUT_USER:
      return {
        ...state,
        pending: false,
        user: null,
        error: null,
      };
    case REGISTER_USER_REQUEST:
      return {
        ...state,
        user: null,
        pending: true,
      };
    case REGISTER_USER_SUCCESS:
      return {
        ...state,
        pending: false,
        registrationSuccess: action.payload.registrationSuccess,
        error: null,
      };
    case REGISTER_USER_FAILURE:
      return {
        ...state,
        pending: false,
        registrationSuccess: null,
        error: action.payload.error,
      };
    default: {
      return {
        ...state,
      };
    }
  }
};

export default userReducer;
