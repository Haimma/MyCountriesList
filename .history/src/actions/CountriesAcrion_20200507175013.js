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
    console.log('CountryListFetch')
    return (dispatch) => {
        return fetch(API)
        .then(response => response.json())
        .then(data =>  {
            dispatch({ type: COUNTRIES_LIST_FETCH, payload: data });
        });
    };
};

export const CountryUpdate = ({country, favorite}) => {
    console.log('CountryUpdate')
    console.log(favorite)
    return (dispatch) => {
        console.log(1)
        console.log(favorite)
        dispatch({ type: COUNTRY_UPDATE });
        console.log(2)
        console.log(favorite)

        if (favorite.indexOf(country) < 0) {
            favorite.push(country)
            console.log(3)
            console.log(favorite)
        }
        else {
            favorite = favorite.filter(c => c !== country);
            console.log(favorite)
            console.log(favorite)
        }
        dispatch({ type: COUNTRY_UPDATE_SUCCESS, payload: favorite });
    }
};