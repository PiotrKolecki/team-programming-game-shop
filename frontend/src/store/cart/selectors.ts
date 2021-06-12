import { AppState } from "../rootReducer";

export const getCart = (state: AppState) => {
  return state.cart.items;
};

