import React, { Component } from 'react';
import { connect } from 'react-redux'
import { createStore, combineReducers } from 'redux'
import { Router, Route, Link, Redirect } from 'react-router-dom'
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'

import styled from "styled-components";
import * as Yup from 'yup';
import { withFormik } from 'formik';

import Popup from "./Popup";



const InputFeedback = ({ error }) =>
  error ? (
    <div className="input-feedback">{error}</div>
  ) : null;

const Label = ({
  error,
  className,
  children,
  ...props
}) => {
  return (
    <label className="label" {...props}>
      {children}
    </label>
  );
};

const TextInput = ({
  type,
  id,
  label,
  error,
  value,
  onChange,
  className,
  ...props
}) => {
  /*const classes = classnames(
    'input-group',
    {
      'animated shake error': !!error,
    },
    className
  );*/
  return (
    <div className={className}>
      <Label htmlFor={id} error={error}>
        {label}
      </Label>
      <input
        id={id}
        className="text-input"
        type={type}
        value={value}
        onChange={onChange}
        {...props}
      />
      <InputFeedback error={error} />
    </div>
  );
};


class MyForm extends Component {
	render(){
		const {
			values,
			touched,
			errors,
			dirty,
			handleChange,
			handleBlur,
			handleSubmit,
			handleReset,
			isSubmitting
		} = this.props;
		return (
			<form onSubmit={handleSubmit}>
			  <TextInput
				id="firstName"
				type="text"
				label="First Name"
				placeholder="John"
				error={touched.firstName && errors.firstName}
				value={values.firstName}
				onChange={handleChange}
				onBlur={handleBlur}
			  />
			  <TextInput
				id="lastName"
				type="text"
				label="Last Name"
				placeholder="Doe"
				error={touched.lastName && errors.lastName}
				value={values.lastName}
				onChange={handleChange}
				onBlur={handleBlur}
			  />
			  <TextInput
				id="email"
				type="email"
				label="Email"
				placeholder="Enter your email"
				error={touched.email && errors.email}
				value={values.email}
				onChange={handleChange}
				onBlur={handleBlur}
			  />
			  <button
				type="button"
				className="outline"
				onClick={handleReset}
				disabled={!dirty || isSubmitting}
			  >
				Reset
			  </button>
			  <button type="submit" disabled={isSubmitting}>
				Submit
			  </button>
			  
			  <Popup />
			  
			</form>
		);
	}
};


const MyEnhancedForm = withFormik({
  validationSchema: Yup.object().shape({
    firstName: Yup.string()
      .min(2, "C'mon, your name is longer than that")
      .required('First name is required.'),
    lastName: Yup.string()
      .min(2, "C'mon, your name is longer than that")
      .required('Last name is required.'),
    email: Yup.string()
      .email('Invalid email address')
      .required('Email is required!'),
  }),

  /*mapPropsToValues: ({ user }) => ({
    ...user,
  }),*/
  
  handleSubmit: (values, { props, setSubmitting }) => {
    //console.log(values);
    console.log(props);
	props.addCoworker(values);
    setSubmitting(false);
	<Redirect to={{ pathname: "/login" }} />
  },
  
  displayName: 'MyForm',
})(MyForm);



export default connect()(MyEnhancedForm);