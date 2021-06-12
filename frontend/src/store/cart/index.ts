import {
    AddItemToCart,
    AddItemPayload,
    AddItemSuccessPayload,
    AddItemErrorPayload,
    AddItemToCartSuccess,
    AddItemToCartFailure,
    CartState,
    CartActions,
    GetItemsFromCart
  } from "./types";
  
  export const ADD_ITEM = "Cart/ADD_ITEM";
  export const ADD_ITEM_SUCCESS = "Cart/ADD_ITEM_SUCCESS";
  export const ADD_ITEM_ERROR = "Cart/ADD_ITEM_ERROR";

  export const GET_ITEMS = "Cart/GET_ITEMS";

  export const getItems = (): GetItemsFromCart => ({
    type: GET_ITEMS,
  });
  
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
    items
  }: AddItemSuccessPayload): AddItemToCartSuccess => ({
    type: ADD_ITEM_SUCCESS,
    payload: {
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
    isFetching: false,
    items: [],
    error: false,
  };
  

  const cartReducer = (
    state = initialState,
    action: CartActions
  ) => {
    switch (action.type) {
      case ADD_ITEM: 
        return { ...state, isFetching: true, items: [...state.items], error: false };
  
      case ADD_ITEM_SUCCESS: 
        return { ...state, 
          isFetching: false, 
          items: 
          [ ...state.items || [], action.payload.items
          ]}
  
      case ADD_ITEM_ERROR: 
        return { ...state, isFetching: false, items: [...state.items], error: true };
  
      default:{
        return {...state};
      }
    }
  }
  
  export default cartReducer;
  