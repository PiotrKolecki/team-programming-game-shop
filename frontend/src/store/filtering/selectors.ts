import { AppState } from "../rootReducer";
import { getCatalogue } from '../catalogue/selectors';

export const getFilters = (state: AppState) => state.filtering;

export const getFilteredItems = (state: AppState) => {
    const { prices, category } = getFilters(state);
    const items = getCatalogue(state);

    return items.filter((item) => item.category === category && item.price >= prices[0] && item.price <= prices[1])
}