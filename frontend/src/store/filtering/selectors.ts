import { AppState } from "../rootReducer";
import { getCatalogue } from '../catalogue/selectors';
import { getSearchTerm } from '../search/selectors';

export const getFilters = (state: AppState) => state.filtering;

export const getFilteredItems = (state: AppState) => {
    const { prices, category } = getFilters(state);
    const items = getCatalogue(state);
    const searchTerm = getSearchTerm(state);

    return items.filter((item) => item.category === category && item.price >= prices[0] && item.price <= prices[1] && item.product_name.toLowerCase().includes(searchTerm.toLowerCase()))
}