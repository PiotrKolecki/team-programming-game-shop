import { AppState } from "../rootReducer";

export const getCatalogue = (state: AppState) => {
  return state.catalogue.items;
};

export const getGameById = (state: AppState, gameId: number) => {
  return state.catalogue.items.find(({ id }) => id === gameId);
};

export const getGameByIds = (state: AppState, gameIds: number[]) => {

  const catalogue = getCatalogue(state).map(({ id, product_name, producer, price }) => ({ id, name: product_name, producer, price }));
  const games = catalogue.filter(({ id }) => gameIds.includes(id));
  return games;
};