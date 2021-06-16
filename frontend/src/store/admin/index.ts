import {
    AddGamePayload,
    AddGame,
  } from "./types";
  
  export const ADD_GAME = "ADMIN/ADD_GAME";
  
  export const addGame = ({ title, publisher, price, quantity, category, description }: AddGamePayload): AddGame => ({
    type: ADD_GAME,
    payload: {
        title, 
        publisher, 
        price, 
        quantity, 
        category, 
        description
    }
  });


  