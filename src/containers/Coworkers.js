import React, { Component } from 'react';
import { Provider } from 'react-redux'
import { createStore, combineReducers } from 'redux'
import { Router, Route, browserHistory } from 'react-router'
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'

import styled from "styled-components";
import yup from 'yup';
import formik from 'formik';

import Coworker from './Coworker'

var UserData = [
	{
		ava: 			"https://pp.userapi.com/c846322/v846322871/a0c39/V8e-pUPjt8w.jpg?ava=1",
		first_name:		"Саша",
		last_name:		"Жолудь",
		age:			"22",
		department:		"отдел клиентской разработки",
	},
	{
		ava: 			"https://pp.userapi.com/c846322/v846322871/a0c39/V8e-pUPjt8w.jpg?ava=1",
		first_name:		"Саша",
		last_name:		"Жолудь",
		age:			"22",
		department:		"отдел клиентской разработки",
	},
	{
		ava: 			"https://pp.userapi.com/c846322/v846322871/a0c39/V8e-pUPjt8w.jpg?ava=1",
		first_name:		"Саша",
		last_name:		"Жолудь",
		age:			"22",
		department:		"отдел клиентской разработки",
	},
	{
		ava: 			"https://pp.userapi.com/c846322/v846322871/a0c39/V8e-pUPjt8w.jpg?ava=1",
		first_name:		"Саша",
		last_name:		"Жолудь",
		age:			"22",
		department:		"отдел клиентской разработки",
	},
	{
		ava: 			"https://pp.userapi.com/c846322/v846322871/a0c39/V8e-pUPjt8w.jpg?ava=1",
		first_name:		"Саша",
		last_name:		"Жолудь",
		age:			"22",
		department:		"отдел клиентской разработки",
	},
	{
		ava: 			"https://pp.userapi.com/c846322/v846322871/a0c39/V8e-pUPjt8w.jpg?ava=1",
		first_name:		"Саша",
		last_name:		"Жолудь",
		age:			"22",
		department:		"отдел клиентской разработки",
	},
	{
		ava: 			"https://pp.userapi.com/c846322/v846322871/a0c39/V8e-pUPjt8w.jpg?ava=1",
		first_name:		"Саша",
		last_name:		"Жолудь",
		age:			"22",
		department:		"отдел клиентской разработки",
	}
];

class Coworkers extends Component {
	GetCoworkers() {
		return UserData.map( (_Data) => <Coworker data={_Data} /> );
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