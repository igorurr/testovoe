import React, { Component } from 'react';
import { Provider } from 'react-redux'
import { createStore } from 'redux'

import styled from "styled-components";
import yup from 'yup';
import formik from 'formik';



class App2 extends Component {
	
  render() {
    return (
      <div className="App2">
		{this.props.text}
      </div>
    );
  }
}



export default App2;
