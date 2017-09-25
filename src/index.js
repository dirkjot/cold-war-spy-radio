import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// redux:
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { devToolsEnhancer } from 'redux-devtools-extension/logOnlyInProduction'
// redux for this app:
import { reducers } from './reducers'

let store = createStore(reducers, devToolsEnhancer())

// passing store to App for demo purposes only!!
ReactDOM.render(
  <Provider store={store}>
    <App store={store}/>
  </Provider>,
  document.getElementById('root')
);
