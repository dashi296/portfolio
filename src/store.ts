import { createStore, combineReducers, compose } from 'redux';
import menuReducer from './menus/reducers';

//for Redux DevTools
declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  combineReducers({
    menu: menuReducer,
  }), composeEnhancers()
);

export default store;

export type AppState = ReturnType<typeof store.getState>;
