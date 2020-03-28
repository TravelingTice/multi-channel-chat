import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
// import bootstrap css
import 'bootstrap/dist/css/bootstrap.min.css';
// import global styles
import './index.scss';

// import router stuff
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { createBrowserHistory as history } from 'history';

// import redux stuff
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import reduxPromiseMiddleware from 'redux-promise';
// import reducers
import messagesReducer from './reducers/messagesReducer';
import channelsReducer from './reducers/channelsReducer';
import selectedChannelReducer from './reducers/selectedChannelReducer';
import currentUserReducer from './reducers/currentUserReducer';

// combine reducers
const reducers = combineReducers({
  messages: messagesReducer,
  channels: channelsReducer,
  selectedChannel: selectedChannelReducer,
  currentUser: currentUserReducer
});

const store = {
  currentUser: null,
  messages: [],
  channels: [],
  selectedChannel: null
}

const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
    }) : compose;

const enhancer = composeEnhancers(
  applyMiddleware(reduxPromiseMiddleware),
  // other store enhancers if any
);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={createStore(reducers, store, enhancer)}>
      <Router history={history}>
        <Switch>
          <Route path="/:channel" component={App} />
          <Redirect from="/" to="/main" />
        </Switch>
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
