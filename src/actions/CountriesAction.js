/* eslint-disable no-trailing-spaces */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import {
    COUNTRIES_LIST_FETCH,
    COUNTRY_UPDATE,
    COUNTRY_UPDATE_SUCCESS,
} from "./types";

const API = 'https://restcountries.eu/rest/v2/all';

export const CountryListFetch = () => {
    return (dispatch) => {
        return fetch(API)
        .then(response => response.json())
        .then(data =>  {
            dispatch({ type: COUNTRIES_LIST_FETCH, payload: data });
        });
    };
};

export const CountryUpdate = (country) =>(dispatch)=> {
    
    dispatch({ type: COUNTRY_UPDATE, payload: country });
};