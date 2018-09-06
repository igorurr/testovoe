import React, { Component } from 'react';
import { Provider } from 'react-redux'
import { createStore, combineReducers } from 'redux'
import { Router, Route, browserHistory } from 'react-router'
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'

import styled from "styled-components";
import yup from 'yup';
import formik from 'formik';



class Coworker extends Component {
	TimestampToDate(timestamp) {
		var date = new Date();
		date.setTime(timestamp);
		return date.getDate() + '.' + (date.getMonth() + 1) + '.' + date.getFullYear();
	}
	
  render() {
    return (
      <div className="Coworker">
		<img src={this.props.data.ava} />
		<div className="info">
			<h3>{this.props.data.firstName} {this.props.data.lastName}</h3>
			<h4>Родился: {this.TimestampToDate(this.props.data.dateOfBirth)}, {this.props.data.post}, {this.props.data.email}</h4>
		</div>
      </div>
    );
  }
}



export default Coworker;