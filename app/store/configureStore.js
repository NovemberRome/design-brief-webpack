import { combineReducers, createStore } from 'redux';
import reducers from '../ducks';

const reducer = combineReducers(reducers);
const configureStore = () => createStore(reducer);

export default configureStore;