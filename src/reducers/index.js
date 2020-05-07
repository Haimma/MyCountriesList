/* eslint-disable no-trailing-spaces */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import { combineReducers } from 'redux';

import CountriesReducers from './CountriesReducers'

export default combineReducers({
    countriesLists: CountriesReducers,
});