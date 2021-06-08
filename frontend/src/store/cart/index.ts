import {
    AddItemToCart,
    AddItemPayload,
    AddItemSuccessPayload,
    AddItemErrorPayload,
    AddItemToCartSuccess,
    AddItemToCartFailure,
    CartState,
    CartActions,
  } from "./types";
  
  export const ADD_ITEM = "Cart/ADD_ITEM";
  export const ADD_ITEM_SUCCESS = "Cart/ADD_ITEM_SUCCESS";
  export const ADD_ITEM_ERROR = "Cart/ADD_ITEM_ERROR";
  
  export const addItem = ({
    product_id, quantity
  }: AddItemPayload): AddItemToCart => ({
    type: ADD_ITEM,
    payload: {
      product_id,
      quantity
    }
  });
  

  export const addItemSuccess = ({
    id, customerId, items
  }: AddItemSuccessPayload): AddItemToCartSuccess => ({
    type: ADD_ITEM_SUCCESS,
    payload: {
      id,
      customerId,
      items
    },
  });

  export const addItemError = ({
    error,
  }: AddItemErrorPayload): AddItemToCartFailure => ({
    type: ADD_ITEM_ERROR,
    payload: {
      error,
    },
  });

  const initialState: CartState = {
    items: [],
    error: false,
  };
  

  const cartReducer = (
    state = initialState,
    action: CartActions
  ) => {
    switch (action.type) {
      case ADD_ITEM: 
        return { ...state, isFetching: true, error: false };
  
      case ADD_ITEM_SUCCESS: 
        return { ...state, items: 
          { ...state.items, [action.payload.id]: 
              {isFetching: false, id: action.payload.id, customerId: action.payload.customerId,  items: action.payload.items }
            }};
  
      case ADD_ITEM_ERROR: 
        return { ...state, isFetching: false, error: true };
  
      default:{
        return {...state};
      }
    }
  }
  
  export default cartReducer;
  