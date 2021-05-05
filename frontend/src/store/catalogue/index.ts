export const CATALOGUE_FETCH = 'Catalogue/FETCH';
export const CATALOGUE_FETCH_SUCCESS = 'Catalogue/FETCH_SUCCES';
export const CATALOGUE_FETCH_ERROR = 'Catalogue/FETCH_ERROR';

export interface CatalogueProps {
    catalogue: string;
};


export const catalogueFetch = () => ({
    type: CATALOGUE_FETCH,
   
});

export const catalogueFetchSuccess = ({ catalogue }: CatalogueProps) => ({
    type: CATALOGUE_FETCH_SUCCESS,
    payload: {
        catalogue,
    }
});

export const catalogueFetchError = ({ error }: any) => ({
    type: CATALOGUE_FETCH_ERROR,
   
});

export default function reducer(state: any = {}, action: any= {}) {
    switch (action.type) {
        case CATALOGUE_FETCH:{
            return {...state, isFetching: true, error: false};
        }

        case CATALOGUE_FETCH_SUCCESS: {
            return { ...state, isFetching: false, items: action.payload.catalogue};
        }

        case CATALOGUE_FETCH_ERROR: {
            return { ...state, isFetching: false, error: true};
        }

        default:
            return state;

    }
}