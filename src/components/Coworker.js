import React, { Component } from 'react';
import { Router, Route, browserHistory } from 'react-router'

import * as Styles from '../styles/index'

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
					<Styles.RecordAnotherInfo>
						Родился:
						{this.TimestampToDate(this.props.data.dateOfBirth)},
						{this.props.data.post},
						{this.props.data.email}
					</Styles.RecordAnotherInfo>
				</div>
			</Styles.Record>
		);
	}
}

export default Coworker;