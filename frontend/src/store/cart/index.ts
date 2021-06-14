import {
    AddItemToCart,
    AddItemPayload,
    AddItemErrorPayload,
    AddItemToCartSuccess,
    AddItemToCartFailure,
    CartState,
    CartActions,
    GetItemsFromCart,
    Item
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
  

  export const addItemSuccess = (items: Item): AddItemToCartSuccess => ({
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
      case GET_ITEMS:
        return { ...state, isFetching: true, items: [...state.items], error: false };
  
      case ADD_ITEM_SUCCESS:{ 
        const hasItemExisted = state.items.some(({ id }) => id === action.payload.items.id)
        
        return { ...state, 
            isFetching: false, 
            items: 
            [ ...state.items || [], ...( hasItemExisted ? [] : [action.payload.items])
            ]
          }
        }
      case ADD_ITEM_ERROR: 
        return { ...state, isFetching: false, items: [...state.items], error: true };
  
      default:{
        return {...state};
      }
    }
  }
  
  export default cartReducer;
  