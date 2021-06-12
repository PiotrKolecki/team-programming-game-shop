import { put, call, takeLatest } from "@redux-saga/core/effects";
import { fetchCatalogue } from "../../services/client";
import {
  CATALOGUE_FETCH,
  catalogueFetchSuccess,
  catalogueFetchError,
} from "./index";

export function* fetchCatalogueSaga() {
  try {
    const catalogue: string = yield call(fetchCatalogue);
    console.log('CATALOGUEEEEE', catalogue);

    yield put(catalogueFetchSuccess({ catalogue }));
  } catch (error) {
    yield put(catalogueFetchError({ error }));
  }
}

// eslint-disable-next-line import/no-anonymous-default-export
export default [takeLatest(CATALOGUE_FETCH, fetchCatalogueSaga)];
