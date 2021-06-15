import {
  CATALOGUE_FETCH,
  CATALOGUE_FETCH_SUCCESS,
  CATALOGUE_FETCH_ERROR,
} from "./index";

export interface IGame {
  id: number;
  name: string;
  producer: string;
  price: number;
}

export interface IGame2 {
  active: boolean;
  category: string;
  coverUrl: string;
  data_published: string;
  description: string;
  id: number;
  product_name: string;
  publisher: string;
  quantity: number;
  producer: string;
  short_description: string;
  price: number;
}

export interface CatalogueState {
  isFetching: boolean;
  items: Array<IGame2>;
  error: boolean;
}

export interface FetchCatalogueSuccessPayload {
  catalogue: Array<IGame2>;
}

export interface FetchCatalogueFailurePayload {
  error: boolean;
}

export type FetchCatalogue = {
  type: typeof CATALOGUE_FETCH;
};

export type FetchCatalogueSuccess = {
  type: typeof CATALOGUE_FETCH_SUCCESS;
  payload: FetchCatalogueSuccessPayload;
};

export type FetchCatalogueFailure = {
  type: typeof CATALOGUE_FETCH_ERROR;
  payload: FetchCatalogueFailurePayload;
};

export type CatalogueActions =
  | FetchCatalogue
  | FetchCatalogueSuccess
  | FetchCatalogueFailure;
