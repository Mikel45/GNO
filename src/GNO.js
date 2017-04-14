import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import App from './components/app';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware()(createStore);


const router = (
  <div>
    <Provider store={createStoreWithMiddleware(reducers)}>
      <App />
    </Provider>
  </div>
)

render(router, document.getElementById('container'));


