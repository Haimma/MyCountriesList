/* eslint-disable no-trailing-spaces */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import {
    COUNTRIES_LIST_CLEAR_PAGE,
    COUNTRIES_LIST_FETCH,
    COUNTRIES_LIST_FETCH_SUCCESS,
    COUNTRIES_LIST_FETCH_FAIL,
    FAVORIES_LIST_CLEAR_PAGE,
    FAVORIES_LIST_FETCH,
    FAVORIES_LIST_FETCH_SUCCESS,
    COUNTRY_UPDATE,
    COUNTRY_UPDATE_SUCCESS,
} from "../actions/types";

const INITIAL_STATE = {
    loading: true,
    all : [],
    favorite : [],
    error: '',
};


export default ( state = INITIAL_STATE, action) => {
    switch (action.type) {
        case COUNTRIES_LIST_FETCH:
            return { ...state, loading: true, error: '' };
        case COUNTRIES_LIST_FETCH_SUCCESS:
            console.log('not good2');
            return { ...state, all: action.payload };
        case COUNTRIES_LIST_FETCH_FAIL:
            console.log('COUNTRIES_LIST_FETCH_FAIL');
            return { ...state, error: 'Please Check you Internet Connection', loading: false };
        case COUNTRIES_LIST_CLEAR_PAGE:
            return INITIAL_STATE;
        case FAVORIES_LIST_FETCH:
            return { ...state, loading: true, error: '' };
        case FAVORIES_LIST_FETCH_SUCCESS:
            return { ...state, ...INITIAL_STATE, lists: action.payload };
        case FAVORIES_LIST_CLEAR_PAGE://TODO check
            return INITIAL_STATE;
        case COUNTRY_UPDATE:
            return { ...state, loading: true, favorite: [], error: '' };
        case COUNTRY_UPDATE_SUCCESS:
            console.log(action.payload)
            return { ...state, favorite: action.payload, loading: false };
        default:
            return state;
    }
}