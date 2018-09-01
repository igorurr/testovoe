import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { Router, Route, browserHistory, Link } from 'react-router-dom'

import 
{
	ConnectedRouter,
	syncHistoryWithStore,
	routerReducer,
	routerMiddleware,
	push
} from "react-router-redux";

import createHistory from "history/createBrowserHistory";

//import './index.css';

import CoworkersRoot from './containers/CoworkersRoot';
import CoworkersForm from './containers/CoworkersForm';

import registerServiceWorker from './registerServiceWorker';

import reducers from "./reducers/reducers"; // Or wherever you keep your reducers

// Create a history of your choosing (we're using a browser history in this case)
const history = createHistory();

// Build the middleware for intercepting and dispatching navigation actions
const middleware = routerMiddleware(history);

// Add the reducer to your store on the `router` key
// Also apply our middleware for navigating
const store = createStore(
  combineReducers({
    ...reducers,
    router: routerReducer
  }),
  applyMiddleware(middleware)
);

// Now you can dispatch navigation actions from anywhere!
// store.dispatch(push('/foo'))


ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
		<div>
			<Route path="/list" component={CoworkersRoot}/>
			<Route path="/add" component={CoworkersForm}/>
		</div>
    </Router>
  </Provider>,
  document.getElementById("mount")
);