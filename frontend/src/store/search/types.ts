import {
    SET_SEARCH
} from './index';

export interface SearchState {
    searchTerm: string
}

export interface SetSearchPayload {
    searchTerm: string
}

export type SetSearch = {
    type: typeof SET_SEARCH;
    payload: SetSearchPayload
}

export type SearchActions =
  | SetSearch