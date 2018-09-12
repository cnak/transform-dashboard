import { combineReducers, createStore } from 'redux';
import { initialBirthdayState,  birthdayReducer } from './reducers/birthday-reducer';

const rootReducer = combineReducers({
    birthdayReducer
});

const initialState = {
    initialBirthdayState
}

export default createStore(rootReducer, initialState, window.devToolsExtension && window.devToolsExtension());