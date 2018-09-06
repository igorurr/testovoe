import React, { Component } from 'react';
import { Provider } from 'react-redux'
import { createStore, combineReducers } from 'redux'
import { Router, Route, browserHistory } from 'react-router'
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'

import styled from "styled-components";
import yup from 'yup';
import formik from 'formik';

import Coworker from './Coworker'

class Coworkers extends Component {
	GetCoworkers() {
		return this.props.UserList.map( (_Data) => <Coworker data={_Data} /> );
	}
	
	render() {
		return (
			<div id="Coworkers">
				{this.GetCoworkers()}
			</div>
		);
	}
}



export default Coworkers;