/* eslint-disable no-trailing-spaces */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import {
    COUNTRIES_LIST_FETCH,
    COUNTRY_UPDATE,
    COUNTRY_UPDATE_SUCCESS,
} from "../actions/types";

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

export const CountryUpdate = ({country, favorite}) => {
    return (dispatch) => {
        dispatch({ type: COUNTRY_UPDATE });
        if (favorite.indexOf(country) < 0) {
            favorite.push(country)
            favorite= favorite.sort(function(a, b){
                if (a.name < b.name) { return -1; }
                if (a.name > b.name) { return 1; }
                return 0;
            })
        }
        else {
            favorite = favorite.filter(c => c !== country);
        }
        dispatch({ type: COUNTRY_UPDATE_SUCCESS, payload: favorite });
    }
};