/* eslint-disable no-trailing-spaces */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import {
    COUNTRIES_LIST_CLEAR_PAGE,
    COUNTRIES_LIST_FETCH,
    COUNTRIES_LIST_FETCH_SUCCESS,
    FAVORIES_LIST_CLEAR_PAGE,
    FAVORIES_LIST_FETCH,
    FAVORIES_LIST_FETCH_SUCCESS,
    COUNTRY_UPDATE,
    COUNTRY_UPDATE_SUCCESS,
} from "../actions/types";

const INITIAL_STATE = {
    all : [],
    favorite : [],
    error: '',
};


export default ( state = INITIAL_STATE, action) => {
    switch (action.type) {
        case COUNTRIES_LIST_FETCH:
            // console.log(11)
            // console.log(state)
            return { ...state, all: action.payload };
        case COUNTRY_UPDATE:
            // console.log(22)
            // console.log(state)
            return { ...state, favorite: [] };
        case COUNTRY_UPDATE_SUCCESS:
            console.log(33)
            console.log(state)
            return { ...state, favorite: action.payload };
        default:
            return state;
    }
}