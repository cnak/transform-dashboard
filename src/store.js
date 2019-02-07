import { combineReducers, createStore } from 'redux';
import { initialBirthdayState, birthdayReducer } from './reducers/birthday-reducer';
import { initialGraphState, graphReducer } from './reducers/graph-reducer';

const rootReducer = combineReducers({
  birthdayReducer,
  graphReducer
});

const initialState = {
  initialBirthdayState,
  initialGraphState
};

export default createStore(
  rootReducer,
  initialState,
  window.devToolsExtension && window.devToolsExtension()
);
