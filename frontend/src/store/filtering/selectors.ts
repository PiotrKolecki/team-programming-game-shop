import { AppState } from "../rootReducer";

export const getFilters = (state: AppState) => state.filtering;

export const getFilteredItems = (state: AppState) => {
    const { prices, category } = getFilters(state);
    const items = [];

    return items.filter((item) => item.category === category && item.price >= prices[0] && item.price <= prices[1])
}