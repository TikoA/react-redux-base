import React from 'react';
import ReactDOM from 'react-dom';
import thunk from 'redux-thunk'
import { ThemeProvider, CSSReset } from '@chakra-ui/core'
import { compose, createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux'
import { rootReducer } from './redux/rootReducer';
import App from './App';

const store = createStore(rootReducer, compose(
  applyMiddleware(
    thunk
  ),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
))

ReactDOM.render(
  <ThemeProvider>
    <CSSReset />
    <Provider store={store}>
      <App/>
    </Provider>
  </ThemeProvider>,
  document.getElementById('root')
);

