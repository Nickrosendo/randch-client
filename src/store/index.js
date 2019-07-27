import { createStore } from 'redux';
import reducer from './reducers';

let store;
if (window && typeof window.__REDUX_DEVTOOLS_EXTENSION__ === 'function') {
  store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__());
} else {
  store = createStore(reducer);
}

export default store;
