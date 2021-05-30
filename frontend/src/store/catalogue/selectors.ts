import { AppState } from "../rootReducer";

export const getCatalogue = (state: AppState) => {
  return state.catalogue.items;
};
