import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
// import bootstrap css
import 'bootstrap/dist/css/bootstrap.min.css';

// import redux stuff
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import reduxPromiseMiddleware from 'redux-promise';

// combine reducers
const reducers = combineReducers({

});

const store = {}

const middlewares = applyMiddleware(reduxPromiseMiddleware);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={createStore(reducers, store, middlewares)}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();