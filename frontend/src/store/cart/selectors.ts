import { AppState } from "../rootReducer";
import { getGameByIds } from '../catalogue/selectors';
import { userGame } from './types';

export const getCart = (state: AppState) => {
  return state.cart.items;
};

export const getUserItems = (state: AppState, currentCustomerId: string | undefined ) => {

  const cart = getCart(state);
  const userItems = cart.filter(({ customer_id }) => customer_id === currentCustomerId);
  const userProductsId = userItems.flatMap(({ items }) => items.map(({ product_id }) => product_id));

  const userGames = getGameByIds(state, userProductsId);
  let gamesWithQuantity: userGame[] = [];

  userGames.forEach((game) => { 
    userItems.forEach(({ items }) => {
      items.forEach(item => {
        if(game.id === item.product_id){
          
          const count = item.quantity;
          gamesWithQuantity = [...gamesWithQuantity, {...game, count}];
        }

      })
    })
  })
  return gamesWithQuantity;
};
