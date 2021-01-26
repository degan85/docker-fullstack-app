import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import App from '../App';

import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import rootReducer from "../modules";
import { Provider } from 'react-redux';

const initalState = {};
const middleware = [thunk];

const store = createStore(rootReducer, initalState, composeWithDevTools(applyMiddleware(...middleware)));

const Root = () => (
  <Provider store={store}>
    <BrowserRouter>
        <App/>
    </BrowserRouter>
  </Provider>
);

export default Root;