
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link } from 'react-router-dom'

import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux'

import createHistory from 'history/createBrowserHistory';

import reducers from "./reducers/";

import App from './containers/App';
import CoworkersRoot from './containers/CoworkersRoot';
import CoworkersForm from './containers/CoworkersForm';

const store = createStore(combineReducers({
	...reducers
}));

export const history = createHistory();

ReactDOM.render(
	<Provider store={store}>
		<Router history={history}>
			<div>
				<Route path="/list" component={CoworkersRoot}/>
				<Route path="/add" component={CoworkersForm}/>
			</div>
		</Router>
	</Provider>,
	document.getElementById('root')
)