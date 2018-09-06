import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Router, Route, Link, Redirect } from 'react-router-dom'
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'

import * as UserList from '../actions/UserList';

import Form from './Form';

class CoworkersForm extends Component {
	render()
	{
		const actions = bindActionCreators(UserList, this.props.dispatch);
		
		return (
			<div>
				<Link to="/list">
					Назад
				</Link>
				<Form addCoworker={actions.AddCoworker} />
			</div>
		);
	}
}


export default connect()(CoworkersForm);