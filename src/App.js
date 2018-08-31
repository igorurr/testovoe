import React, { Component } from 'react';
import { Provider } from 'react-redux'
import { createStore } from 'redux'

import styled from "styled-components";
import yup from 'yup';
import formik from 'formik';

import logo from './logo.svg';
import './App.css';

const Button = styled.button`
  /* Adapt the colours based on primary prop */
  background: ${props => props.primary ? 'palevioletred' : 'white'};
  color: ${props => props.primary ? '#00F000' : 'palevioletred'};

  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;
	
class App extends Component {
	
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
		<div>
			<Button>Normal</Button>
			<Button primary>Primary</Button>
		</div>
      </div>
    );
  }
}

export default App;
