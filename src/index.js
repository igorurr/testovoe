import React from "react";
import ReactDOM from "react-dom";
import { Router, Route } from "react-router-dom";

import { Provider } from "react-redux";
import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

import createHistory from "history/createBrowserHistory";

import reducers from "./reducers/";

import CoworkersRoot from "./containers/CoworkersRoot";
import CoworkersForm from "./containers/CoworkersForm";

const store = createStore(
  combineReducers({
    ...reducers
  }),
  compose(applyMiddleware(thunk))
);

var history = createHistory();

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <div>
        <Route path="/list" component={CoworkersRoot} />
        <Route path="/add" component={CoworkersForm} />
      </div>
    </Router>
  </Provider>,
  document.getElementById("root")
);
