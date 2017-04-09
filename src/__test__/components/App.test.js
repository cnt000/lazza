import React from 'react'
import { render } from 'react-dom'
import injectTapEventPlugin from 'react-tap-event-plugin'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import { promiseMiddleware } from '../../actions'
import appReducers from '../../reducers'
import { defaultState } from '../../defaultState'
import App from '../../components/App'
import 'reset-css'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import 'typeface-roboto'

it('App renders without crashing', () => {
  const persistedState = defaultState;

  let store = createStore(
    appReducers,
    persistedState,
    applyMiddleware(promiseMiddleware)
  );

  // Needed for onTouchTap
  // http://stackoverflow.com/a/34015469/988941
  injectTapEventPlugin();

  let providerComponent =   <Provider store={store}>
                              <MuiThemeProvider>
                                <App />
                              </MuiThemeProvider>
                            </Provider>;
  const div = document.createElement('div');
  render(providerComponent, div);
});