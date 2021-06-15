import {
    ADD_ITEM,
    ADD_ITEM_SUCCESS,
    ADD_ITEM_ERROR,
    GET_ITEMS,
    DELETE_ITEM
} from "./index";


export interface userGame {
  id: number,
  name: string,
  producer: string,
  price: number,
  count: number
}

export interface Game {
  product_id: number,
  quantity: number
}

export interface Item {
    id: number,
    customer_id: string,
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

export interface DeleteItemPayload {
  id: number,
  customer_id: string | undefined
}

export interface deleteItemsFromCartPayload {
  id: number,
  customer_id: string | undefined,
  product_id: number
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

  export type DeleteItemFromCart = {
    type: typeof DELETE_ITEM;
    payload: DeleteItemPayload
  };
  

  export type CartActions =
  | AddItemToCart
  | AddItemToCartSuccess
  | AddItemToCartFailure
  | GetItemsFromCart
  | DeleteItemFromCart;