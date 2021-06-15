import {
    AddItemToCart,
    AddItemPayload,
    AddItemErrorPayload,
    AddItemToCartSuccess,
    AddItemToCartFailure,
    CartState,
    CartActions,
    GetItemsFromCart,
    Item,
    DeleteItemFromCart,
    DeleteItemPayload
  } from "./types";

  export const ADD_ITEM = "Cart/ADD_ITEM";
  export const ADD_ITEM_SUCCESS = "Cart/ADD_ITEM_SUCCESS";
  export const ADD_ITEM_ERROR = "Cart/ADD_ITEM_ERROR";

  export const GET_ITEMS = "Cart/GET_ITEMS";
  export const DELETE_ITEM = "Cart/DELETE_ITEM";

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

  export const deleteItem = ({ id, customer_id }: DeleteItemPayload ): DeleteItemFromCart => ({
    type: DELETE_ITEM,
    payload: {
      id,
      customer_id
    }
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
        const modifiedItems = state.items.map((item) => {
          if(item.customer_id === action.payload.items.customer_id){
            return {...item, items: action.payload.items.items}
          }

          return action.payload.items;
        })
        return { ...state, 
            isFetching: false, 
            items: state.items.length ? modifiedItems : [action.payload.items]
          }
        }
      case ADD_ITEM_ERROR: 
        return { ...state, isFetching: false, items: [...state.items], error: true };

      case DELETE_ITEM:{ 
        const userItems = (state.items || []).filter(item => item.customer_id === action.payload.customer_id);
        const modifiedUserItems = (userItems || []).map(item => ({...item, items: item.items.filter(({ product_id }) => product_id !== action.payload.id )}));
        
        
        const newItems = [...(state.items || []).filter(item => item.customer_id !== action.payload.customer_id), ...modifiedUserItems]
        return { ...state, 
            isFetching: false, 
            items: newItems,
          }
        }
  
      default:{
        return {...state};
      }
    }
  }
  
  export default cartReducer;
  