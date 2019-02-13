import { combineReducers, createStore } from 'redux';

const rootReducer = combineReducers({});

const initialState = {};

export default createStore(
  rootReducer,
  initialState,
  // eslint-disable-next-line no-undef
  window.devToolsExtension && window.devToolsExtension()
);
