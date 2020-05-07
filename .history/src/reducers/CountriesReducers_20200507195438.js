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
  all: [],
  favorite: [],
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case COUNTRIES_LIST_FETCH:
      return { ...state, all: action.payload };
    case COUNTRY_UPDATE:
      let tempFavourites = state.favorite;
      let country = action.payload;
      let isExist = tempFavourites.find(
        (c) => c.alpha2Code == country.alpha2Code
      );
      if (isExist) {
        tempFavourites.filter((c) => c.alpha2Code !== country.alpha2Code);
      } else {
        tempFavourites.push(country);
      }

      return { ...state, favorite: [...tempFavourites] };

    default:
      return state;
  }
};
