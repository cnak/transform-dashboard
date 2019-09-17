/* eslint-disable no-underscore-dangle */
import { combineReducers, createStore } from 'redux';
import { cognito } from 'react-cognito';

const rootReducer = combineReducers({ cognito });

const initialState = {};

export default createStore(
    rootReducer,
    initialState,
    // eslint-disable-next-line no-undef
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
