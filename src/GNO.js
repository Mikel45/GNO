import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import App from './app';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware()(createStore);


const router = (
  <Provider store={createStoreWithMiddleware(reducers)}>
    <App />
  </Provider>
)

render(router, document.getElementById('container'));


