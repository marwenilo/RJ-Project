import { createStore } from 'redux';
import rootReducer from '../reducers';
const reduxdevTools = window.__REDUX_DEVTOOLS_EXTENSION__();

const store = createStore(rootReducer, reduxdevTools);

export default store;