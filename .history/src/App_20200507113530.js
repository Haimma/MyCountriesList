/* eslint-disable no-trailing-spaces */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import MainScreen from './components/MainScreen';

export default class App extends Component {

    render() {
        const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
        return (
            <Provider store={store}>
                <MainScreen/>
                {/* <AppNavigator ref={nav => setNavigator(nav)}/> */}
             </Provider>
        );
    }
}

import { PersistGate } from 'redux-persist/integration/react'
 
// ... normal setup, create store and persistor, import components etc.
 
const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <RootComponent />
      </PersistGate>
    </Provider>
  );
};