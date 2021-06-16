import { AppState } from "../rootReducer";
import { getCatalogue } from '../catalogue/selectors';

export const getPendingSelector = (state: AppState) => state.orders.pending;

export const getErrorSelector = (state: AppState) => state.orders.error;

export const getOrdersSelector = (state: AppState) => state.orders.orders;

export const getOrderedItems = (state: AppState, order: any) => {
    const catalogue = getCatalogue(state);
    const { items } = order;
    
    const itemsId = items.map((item: any) => item.id)
    const orderedGames = catalogue.filter(({ id }) => itemsId.includes(id));

    const userItems = orderedGames.map((game, index) => ({...game, quantity: items[index].quantity}))
    return userItems;
}

export const getOrderStatusSelector = (state: AppState) =>
  state.orders.completed;
