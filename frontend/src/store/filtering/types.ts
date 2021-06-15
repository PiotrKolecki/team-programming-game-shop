import {
    SET_FILTERS
} from './index';

export interface FiltersState {
    prices: number[],
    category: string
}

export interface SetFiltersPayload {
    prices: number[],
    category: string
}

export type SetFilters = {
    type: typeof SET_FILTERS;
    payload: SetFiltersPayload

}

export type FiltersActions =
  | SetFilters