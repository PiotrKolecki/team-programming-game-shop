import {
    SetSearchPayload,
    SetSearch,
    SearchActions,
    SearchState
  } from "./types";
  
  export const SET_SEARCH = "SEARCH/SET";
  
 
  export const searchSet = ({ searchTerm }: SetSearchPayload): SetSearch => ({
    type: SET_SEARCH,
    payload: {
        searchTerm
    }
  });
  
  const initialState: SearchState = {
    searchTerm: ''
  };
  
  const filtersReducer = (
    state = initialState,
    action: SearchActions
  ) => {
    switch (action.type) {
        case SET_SEARCH: 
        return { ...state, searchTerm: action.payload.searchTerm, error: false };

      default:{
        return { ...state };
      }
    }
  }
  
  export default filtersReducer;
  