import { AppState } from "../rootReducer";

export const getCatalogue = (state: AppState) => {
  return state.catalogue.items;
};

export const getGameById = (state: AppState, gameId: number) => {
  return state.catalogue.items.find(({ id }) => id === gameId);
};

export const getGameByIds = (state: AppState, gameIds: number[]) => {
  const mockedGames = [
    {
      id: 4,
      name: "The wither wild hunt test długiej nazwy",
      producer: "2K Games",
      price: 11.99,
    },
    {
      id: 3,
      name: "Wanted Racoon",
      producer: "MAD Sprouts",
      price: 10.99,
    },
  ];
  const games = mockedGames.filter(({ id }) => gameIds.includes(id));
  return games;
  // return state.catalogue.items.filter(({ id }) => gameIds.includes(id));
};