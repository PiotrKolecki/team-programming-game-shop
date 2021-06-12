import {
    ADD_ITEM,
    ADD_ITEM_SUCCESS,
    ADD_ITEM_ERROR,
    GET_ITEMS
} from "./index";

export interface Game {
  id: number,
  quantity: number
}

export interface Item {
    id: number,
    customerId: number,
    items: Array<Game>
}

export interface CartState {
  isFetching: boolean,
  items: Array<Item>;
  error: boolean;
}

export interface AddItemPayload {
  product_id: number;
  quantity: number,
}

export interface AddItemSuccessPayload {
  items: Item
}

export interface AddItemErrorPayload {
    error: boolean
}

export type AddItemToCart = {
    type: typeof ADD_ITEM;
    payload: AddItemPayload;
  };

  export type AddItemToCartSuccess = {
    type: typeof ADD_ITEM_SUCCESS;
    payload: AddItemSuccessPayload;
  };

  export type AddItemToCartFailure = {
    type: typeof ADD_ITEM_ERROR;
    payload: AddItemErrorPayload;
  };

  export type GetItemsFromCart = {
    type: typeof GET_ITEMS;
  };
  

  export type CartActions =
  | AddItemToCart
  | AddItemToCartSuccess
  | AddItemToCartFailure;