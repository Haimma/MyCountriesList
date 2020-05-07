/* eslint-disable no-trailing-spaces */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import MainScreen from './components/MainScreen';
// Imports: Redux Persist Persister
import { store, persistor } from './configureStore';

export default class App extends Component {

    render() {
        return (
            // Redux: Global Store
            <Provider store={store}>
                <PersistGate 
                    loading={null}
                    persistor={persistor}
                >
                    <MainScreen/>
                </PersistGate>
            </Provider>
        );
    }
}