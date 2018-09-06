import React, { Component } from 'react';
import { connect } from 'react-redux'
import { createStore, combineReducers } from 'redux'
import { Router, Route, Link, Redirect, withRouter } from 'react-router-dom'
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'

import styled from "styled-components";
import * as Yup from 'yup';
import { withFormik } from 'formik';

import Popup from "./Popup";




import createHistory from 'history/createBrowserHistory';
var history = createHistory();


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
	constructor(props){
		super(props);
		this.state = { wasSubmittingOnce: false };
	}
	
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
		
		console.log('MyForm',isSubmitting);
		if( !this.state.wasSubmittingOnce && isSubmitting )
			this.setState({ wasSubmittingOnce: true });
		
		return (
			<form onSubmit={handleSubmit}>
			  <TextInput
				id="firstName"
				type="text"
				label="Имя"
				placeholder="Моё имя"
				error={(this.state.wasSubmittingOnce || touched.firstName) && errors.firstName}
				value={values.firstName}
				onChange={handleChange}
				onBlur={handleBlur}
			  />
			  <TextInput
				id="lastName"
				type="text"
				label="Фамилия"
				placeholder="Моя фамилия"
				error={(this.state.wasSubmittingOnce || touched.lastName) && errors.lastName}
				value={values.lastName}
				onChange={handleChange}
				onBlur={handleBlur}
			  />
			  <TextInput
				id="post"
				type="text"
				label="Должность"
				placeholder="Моя должность"
				error={(this.state.wasSubmittingOnce || touched.post) && errors.post}
				value={values.firstName}
				onChange={handleChange}
				onBlur={handleBlur}
			  />
			  <TextInput
				id="dateWasBorn"
				type="text"
				label="Дата рождения"
				error={(this.state.wasSubmittingOnce || touched.dateWasBorn) && errors.dateWasBorn}
				value={values.firstName}
				onChange={handleChange}
				onBlur={handleBlur}
			  />
			  <TextInput
				id="email"
				type="email"
				label="Email"
				placeholder="Мой email"
				error={(this.state.wasSubmittingOnce || touched.email) && errors.email}
				value={values.email}
				onChange={handleChange}
				onBlur={handleBlur}
			  />
			  <button type="submit" disabled={isSubmitting}>
				Submit
			  </button>
			  
				<Popup opened={isSubmitting} />
			  
			</form>
		);
	}
};


const MyEnhancedForm = withFormik({
  validationSchema: Yup.object().shape({
    firstName: Yup.string()
      .max(15, 'Максимальная длина имени 15 символов')
	  .matches(/^([А-Яа-я]*)$/, 'Имя должно быть написана на русском языке')
      .required('Поле пусто'),
    lastName: Yup.string()
      .max(15, 'Максимальная длина фамилии 15 символов')
	  .matches(/^([А-Яа-я]*)$/, 'Фамилия должна быть написана на русском языке')
      .required('Поле пусто'),
    email: Yup.string()
      .email('Невалидный email адрес')
      .required('Поле пусто'),
    post: Yup.string()
      .required('Поле пусто'),
    dateWasBorn: Yup.date()
		.typeError('Неверный формат даты')
		.max(new Date(), 'Это невозможно')
  }),

  /*mapPropsToValues: ({ user }) => ({
    ...user,
  }),*/
  //history.push("/redirect_url");
  
  handleSubmit: (values, { props, setSubmitting }) => {
	console.log(values);
	props.addCoworker(values);
    //setSubmitting(false);
	//props.history.push('/list');
	//this.setState({r:'e'});
	setTimeout(() => props.history.push('/list'), 1500);
  },
  
  displayName: 'MyForm',
})(MyForm);



export default withRouter(MyEnhancedForm);