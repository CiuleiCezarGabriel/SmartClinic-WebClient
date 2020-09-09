
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import App from './App';
import rootReducer from './reducers'
import thunk from "redux-thunk";
import { composeWithDevTools } from 'redux-devtools-extension'
import { PersistGate } from 'redux-persist/integration/react'
import { persistStore, persistReducer } from 'redux-persist';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2'
import storage from 'redux-persist/lib/storage';
import '../index.css';

//import useSlider from "./useSlider";
//import "./styles.css";

// Add redux persist store to the application

const persistConfig = {
    key: 'root',
    storage: storage,
    stateReconciler: autoMergeLevel2
};

const pReducer = persistReducer(persistConfig, rootReducer);
const store = createStore(pReducer, composeWithDevTools(applyMiddleware(thunk)))
const persistor = persistStore(store)




ReactDOM.render(
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            <App />
        </PersistGate>
    </Provider>
    , document.getElementById('app')
);