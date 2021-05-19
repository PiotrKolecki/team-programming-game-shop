import {
  CATALOGUE_FETCH,
  CATALOGUE_FETCH_SUCCESS,
  CATALOGUE_FETCH_ERROR,
} from "./index";

export interface CatalogueState {
  isFetching: boolean;
  items: string | null;
  error: string | null;
}

export interface FetchCatalogueSuccessPayload {
  catalogue: string;
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
