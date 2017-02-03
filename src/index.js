import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import thunkMiddleware from 'redux-thunk'
import { createStore, applyMiddleware } from 'redux'
import {customMiddleware, promiseMiddleware} from './actions'
import appReducers from './reducers'
import { defaultState } from './defaultState';
import App from './components/App'
import './index.css'
import 'bootstrap/dist/css/bootstrap.css';

const SESSION_NAME_REDUX = 'lazza_redux_';

//console.log(defaultState);
const persistedState = localStorage.getItem(SESSION_NAME_REDUX) ? JSON.parse(localStorage.getItem(SESSION_NAME_REDUX)) : defaultState;
let store = createStore(
  appReducers,
  persistedState,
  applyMiddleware(customMiddleware, thunkMiddleware, promiseMiddleware)
);

store.subscribe(()=>{
  localStorage.setItem(SESSION_NAME_REDUX, JSON.stringify(store.getState()));
  console.log(store.getState());
});

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
