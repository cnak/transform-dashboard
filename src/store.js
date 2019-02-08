import { combineReducers, createStore } from 'redux';
import { initialGraphState, graphReducer } from './reducers/graph-reducer';

const rootReducer = combineReducers({
  graphReducer
});

const initialState = {
  initialGraphState
};

export default createStore(
  rootReducer,
  initialState,
  // eslint-disable-next-line no-undef
  window.devToolsExtension && window.devToolsExtension()
);
