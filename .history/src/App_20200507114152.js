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
import React, { Component } from 'react';

import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
// Imports: Screens
import Counter from './screens/Counter';
// Imports: Redux Persist Persister
import { store, persistor } from './store/store';
// React Native: App
export default function App() {
  return (
    // Redux: Global Store
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Counter />
      </PersistGate>
    </Provider>
  );
};