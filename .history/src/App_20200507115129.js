/* eslint-disable no-trailing-spaces */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
// import { createStore, applyMiddleware } from 'redux';
// import ReduxThunk from 'redux-thunk';
// import reducers from './reducers';

// export default class App extends Component {

//     render() {
//         const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
//         return (
//             <Provider store={store}>
//                 {/* <AppNavigator ref={nav => setNavigator(nav)}/> */}
//              </Provider>
//         );
//     }
// }

import React, { Component } from 'react';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import MainScreen from './components/MainScreen';
// Imports: Redux Persist Persister
import { store, persistor } from './configureStore';
// React Native: App
export default class App extends Component {
  return (
    // Redux: Global Store
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
      </PersistGate>
    </Provider>
  );
};

// Imports: Dependencies
import React from 'react';
import { PersistGate } from 'redux-persist/es/integration/react'
import { Provider } from 'react-redux';

// Imports: Screens
import Counter from './screens/Counter';

// Imports: Redux Persist Persister
import { store, persistor } from './redux/store/store';
// React Native: App
export default App = () => {
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
};
