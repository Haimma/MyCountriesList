/* eslint-disable no-trailing-spaces */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import {
    COUNTRIES_LIST_FETCH,
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
            return { ...state, all: action.payload };
        case COUNTRIES_LIST_CLEAR_PAGE:
            return INITIAL_STATE;
        case FAVORIES_LIST_FETCH:
            return { ...state, loading: true, error: '' };
        case FAVORIES_LIST_FETCH_SUCCESS:
            return { ...state, ...INITIAL_STATE, lists: action.payload };
        case FAVORIES_LIST_CLEAR_PAGE:
            return INITIAL_STATE;
        case COUNTRY_UPDATE:
            return { ...state, loading: true, favorite: [], error: '' };
        case COUNTRY_UPDATE_SUCCESS:
            return { ...state, favorite: action.payload, loading: false };
        default:
            return state;
    }
}