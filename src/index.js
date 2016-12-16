import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import {customMiddleware} from './actions'
import appReducers from './reducers'
import { defaultState } from './defaultState';
import App from './components/App'
import './index.css'
import 'bootstrap/dist/css/bootstrap.css';

const SESSION_NAME_REDUX = 'lazza_redux_';

function status(response) {
  if (response.status >= 200 && response.status < 300) {
    return Promise.resolve(response)
  } else {
    return Promise.reject(new Error(response.statusText))
  }
}

function json(response) {
  return response.json()
}

fetch('players.php')
  .then(status)
  .then(json)
  .then(function(data) {
    defaultState.judging.players = data.players;
    console.log('Request succeeded with JSON response', data);
  }).catch(function(error) {
    defaultState.judging.players = ["Edoardo Gargano","Gianluca Bertoncelli", "Andrea Ludergnani","Andrea Festi","Gianluca Giglio","Andrea Meola"];
    console.log('Request failed', error);
  });

//console.log(defaultState);
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
