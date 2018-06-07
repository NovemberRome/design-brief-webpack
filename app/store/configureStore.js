import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import reducers from '../ducks';

const reducer = combineReducers(reducers);
const enhancer = applyMiddleware(thunk);
const configureStore = () => createStore(reducer, enhancer);

export default configureStore;