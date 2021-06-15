import { AppState } from "../rootReducer";
import { getUserIdSelector } from '../user/selectors';
import { getCatalogue } from '../catalogue/selectors';

export const getPendingSelector = (state: AppState) => state.orders.pending;

export const getErrorSelector = (state: AppState) => state.orders.error;

export const getOrdersSelector = (state: AppState) => state.orders.orders;

export const getOrderedItems = (state: AppState) => {
    const userId = getUserIdSelector(state);
    const orders = getOrdersSelector(state);
    const userOrders = orders.filter(({customerId}) => customerId === Number(userId));
    const catalogue = getCatalogue(state);


    const itemsId = userOrders.flatMap(({ items }) => items.map(({id}) => id));
    return catalogue.filter(({ id }) => itemsId.includes(id))
}

