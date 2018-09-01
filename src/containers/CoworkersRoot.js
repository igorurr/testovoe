import React, { Component } from 'react';
import { Provider } from 'react-redux'
import { createStore, combineReducers } from 'redux'
import { Router, Route, Link } from 'react-router-dom'
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'

import styled from "styled-components";
import yup from 'yup';
import formik from 'formik';

import Coworkers from './Coworkers'

import ImgAddCoworker from '../img/AddCoworker.png'

const AddButton = styled.button`
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;

class CoworkersRoot extends Component {
  render() {
    return (
		<div id="CoworkersRoot">
			<header>
				<Link to="/add">
					<AddButton>
						<img src={ImgAddCoworker} />
					</AddButton>
				</Link>
			</header>
			<content>
				<Coworkers />
			</content>
		</div>
    );
  }
}



export default CoworkersRoot;