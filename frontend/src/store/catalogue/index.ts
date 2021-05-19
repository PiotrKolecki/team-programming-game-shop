import {
  CatalogueState,
  FetchCatalogueSuccessPayload,
  FetchCatalogueFailurePayload,
  FetchCatalogue,
  FetchCatalogueSuccess,
  FetchCatalogueFailure,
  CatalogueActions,
} from "./types";

export const CATALOGUE_FETCH = "Catalogue/FETCH";
export const CATALOGUE_FETCH_SUCCESS = "Catalogue/FETCH_SUCCES";
export const CATALOGUE_FETCH_ERROR = "Catalogue/FETCH_ERROR";

export const catalogueFetch = (): FetchCatalogue => ({
  type: CATALOGUE_FETCH,
});

export const catalogueFetchSuccess = ({
  catalogue,
}: FetchCatalogueSuccessPayload): FetchCatalogueSuccess => ({
  type: CATALOGUE_FETCH_SUCCESS,
  payload: {
    catalogue,
  },
});

export const catalogueFetchError = ({
  error,
}: FetchCatalogueFailurePayload): FetchCatalogueFailure => ({
  type: CATALOGUE_FETCH_ERROR,
  payload: {
    error,
  },
});

const initialState: CatalogueState = {
  isFetching: false,
  items: null,
  error: null,
};

export default function reducer(
  state = initialState,
  action: CatalogueActions
) {
  switch (action.type) {
    case CATALOGUE_FETCH: {
      return { ...state, isFetching: true, error: false };
    }

    case CATALOGUE_FETCH_SUCCESS: {
      return { ...state, isFetching: false, items: action.payload.catalogue };
    }

    case CATALOGUE_FETCH_ERROR: {
      return { ...state, isFetching: false, error: true };
    }

    default:
      return state;
  }
}
