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

const API = 'https://restcountries.eu/rest/v2/all';

export const CountryListFetch = () => {
    return (dispatch) => {
        // dispatch({ type: COUNTRIES_LIST_CLEAR_PAGE });
        // dispatch({ type: COUNTRIES_LIST_FETCH });
        return fetch(API)
        .then(response => response.json())
        .then(data =>  {
            dispatch({ type: COUNTRIES_LIST_FETCH_SUCCESS, payload: data });
        });
    };
};

// export const FavoriteListFetch = () => {
//     return (dispatch) => {
//         const all = [];
//         dispatch({ type: COUNTRIES_LIST_CLEAR_PAGE });
//         dispatch({ type: COUNTRIES_LIST_FETCH });
//         fetch(API)
//         .then(response => response.json())
//         .then(data => this.setState({ all: data }));
//         dispatch({ type: COUNTRIES_LIST_FETCH_SUCCESS, payload: all });
//     }
// };

export const CountryUpdate = ({country, favorite}) => {
    return (dispatch) => {
        dispatch({ type: COUNTRY_UPDATE });
        if (favorite.indexOf(country) < 0) {
            favorite.push(country);
        }
        else {
            favorite = favorite.filter(c => c !== country);
        }

        dispatch({ type: COUNTRY_UPDATE_SUCCESS, payload: favorite });

    }
};