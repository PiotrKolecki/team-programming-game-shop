import { AppState } from "../rootReducer";

export const getPendingSelector = (state: AppState) => state.user.pending;

export const getErrorSelector = (state: AppState) => state.user.error;

export const getTokenSelector = (state: AppState) => state.user.user?.token;

export const getUserIdSelector = (state: AppState) => state.user.user?.id;

export const getRegistrationSelector = (state: AppState) =>
  state.user.registrationSuccess;
