import React, { Component } from 'react';
import { Provider } from 'react-redux'
import { createStore, combineReducers } from 'redux'
import { Router, Route, browserHistory } from 'react-router'
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'

import yup from 'yup';
import formik from 'formik';

import * as Styles from '../styles/'

class Coworker extends Component {
	TimestampToDate(timestamp) {
		var date = new Date();
		date.setTime(timestamp);
		return date.getDate() + '.' + (date.getMonth() + 1) + '.' + date.getFullYear();
	}
	
  render() {
    return (
      <Styles.Record className="Coworker">
		<img src={this.props.data.ava} />
		<div className="info">
			<Styles.RecordName>{this.props.data.firstName} {this.props.data.lastName}</Styles.RecordName>
			<Styles.RecordAnotherInfo>Родился: {this.TimestampToDate(this.props.data.dateOfBirth)}, {this.props.data.post}, {this.props.data.email}</Styles.RecordAnotherInfo>
		</div>
      </Styles.Record>
    );
  }
}



export default Coworker;