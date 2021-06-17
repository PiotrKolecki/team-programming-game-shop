import {
    SetFilters,
    FiltersActions,
    FiltersState,
    SetFiltersPayload
  } from "./types";
  
  export const SET_FILTERS = "FILTERS/SET";
  
  export const filtersSet = ({ prices, category }: SetFiltersPayload): SetFilters => ({
    type: SET_FILTERS,
    payload: {
        prices,
        category
    }
  });
  const initialState: FiltersState = {
    prices: [0, 300],
    category: 'All'
  };
  
  const filtersReducer = (
    state = initialState,
    action: FiltersActions
  ) => {
    switch (action.type) {
      case SET_FILTERS: 
        return { ...state, prices: action.payload.prices, category: action.payload.category, error: false };

      default:{
        return { ...state };
      }
    }
  }
  
  export default filtersReducer;
  