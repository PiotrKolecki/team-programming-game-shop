import {
    ADD_ITEM,
    ADD_ITEM_SUCCESS,
    ADD_ITEM_ERROR
} from "./index";

interface Item {
    id: number,
    quantity: number
}

export interface CartState {
  // isFetching: boolean;
  items: string[] | null;
  error: boolean;
}

export interface AddItemPayload {
  product_id: number;
  quantity: number,
}

export interface AddItemSuccessPayload {
  id: number;
  customerId: number;
  items: Item[],
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
  

  export type CartActions =
  | AddItemToCart
  | AddItemToCartSuccess
  | AddItemToCartFailure;