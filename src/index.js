import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// redux:
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension/logOnlyInProduction'
// redux for this app:
import { reducers } from './reducers'

// custom middleware (v1)
import {AsyncMiddleware, LoggerMiddleware} from './actions'  // for demo

let store = createStore(
  reducers,
  composeWithDevTools(
    applyMiddleware(LoggerMiddleware, AsyncMiddleware)))

// passing store to App for demo purposes only!!
ReactDOM.render(
  <Provider store={store}>
    <App store={store}/>
  </Provider>,
  document.getElementById('root')
);
