import React, { Component } from 'react';
import { Provider } from 'react-redux'
import { createStore, combineReducers } from 'redux'
import { Router, Route, browserHistory } from 'react-router'
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'

import styled from "styled-components";
import yup from 'yup';
import formik from 'formik';



class Coworker extends Component {
  render() {
    return (
      <div className="Coworker">
		<img src={this.props.data.ava} />
		<div className="info">
			<h3>{this.props.data.first_name} {this.props.data.last_name}</h3>
			<h4>{this.props.data.age}, {this.props.data.department}</h4>
		</div>
      </div>
    );
  }
}



export default Coworker;