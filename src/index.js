import React from 'react'
import { render } from 'react-dom'
import injectTapEventPlugin from 'react-tap-event-plugin'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import { promiseMiddleware } from './actions'
import appReducers from './reducers'
import App from './components/App'
import defaultState from './defaultState'
import 'reset-css'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import 'typeface-roboto'

const SESSION_NAME_REDUX = 'lazza_redux_';

const persistedState = localStorage.getItem(SESSION_NAME_REDUX) ? JSON.parse(localStorage.getItem(SESSION_NAME_REDUX)) : defaultState;
let store = createStore(
  appReducers,
  persistedState,
  applyMiddleware(promiseMiddleware)
);

store.subscribe(()=>{
  localStorage.setItem(SESSION_NAME_REDUX, JSON.stringify(store.getState()));
  //console.log(store.getState());
});

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

render(
  <Provider store={store}>
    <MuiThemeProvider>
      <App />
    </MuiThemeProvider>
  </Provider>,
  document.getElementById('root')
)
