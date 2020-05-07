/* eslint-disable no-trailing-spaces */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
// import { createStore, applyMiddleware } from 'redux';
// import ReduxThunk from 'redux-thunk';
// import reducers from './reducers';


// import React from 'react';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import MainScreen from './components/MainScreen';
// Imports: Redux Persist Persister
import { store, persistor } from './configureStore';
// Imports: Dependencies

// export default App = () => {
//     return (
//         // Redux: Global Store
//         <Provider store={store}>
//         <PersistGate 
//             loading={null}
//             persistor={persistor}
//         >
//                 <MainScreen/>
//         </PersistGate>
//         </Provider>
//     );
// };
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