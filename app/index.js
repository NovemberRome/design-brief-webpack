import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './global.scss';
import configureStore from './store/configureStore';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

// Create store:
const store = configureStore();

// Now App is wrapped in a component that provides store:
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, document.getElementById('root'));
registerServiceWorker();
