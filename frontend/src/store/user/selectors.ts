import { AppState } from "../rootReducer";

export const getPendingSelector = (state: AppState) => state.user.pending;

export const getErrorSelector = (state: AppState) => state.user.error;

export const getTokenSelector = (state: AppState) => state.user.user?.token;

export const getRegistrationSelector = (state: AppState) =>
  state.user.registrationSuccess;
