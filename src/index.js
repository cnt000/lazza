import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import {customMiddleware} from './actions'
import appReducers from './reducers'
import App from './components/App'
import './index.css'
import 'bootstrap/dist/css/bootstrap.css';

const SESSION_NAME_REDUX = 'lazza_redux_';
const defaultState = {
  judging: {
    session: '',
    fields: [],
    votes: [],
    results: {}
  }
};

const persistedState = localStorage.getItem(SESSION_NAME_REDUX) ? JSON.parse(localStorage.getItem(SESSION_NAME_REDUX)) : defaultState;
let store = createStore(
  appReducers,
  persistedState,
  applyMiddleware(customMiddleware)
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
