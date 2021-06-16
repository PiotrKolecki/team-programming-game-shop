import {
    ADD_GAME
  } from "./index";

  export interface AddGamePayload {
    title: string, 
    publisher: string, 
    price: number, 
    quantity: number, 
    category: string, 
    description: string
  }

  export type AddGame = {
    type: typeof ADD_GAME;
    payload: AddGamePayload;
  };
