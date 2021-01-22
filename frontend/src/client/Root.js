import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import App from '../App';

import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from "../modules";
import { Provider } from 'react-redux';

const store = createStore(rootReducer, composeWithDevTools());

const Root = () => (
  <Provider store={store}>
    <BrowserRouter>
        <App/>
    </BrowserRouter>
  </Provider>
);

export default Root;