import React, { Component } from 'react';
import { connect } from 'react-redux'
import { createStore, combineReducers } from 'redux'
import { Router, Route, Link, Redirect, withRouter } from 'react-router-dom'
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'

import styled from "styled-components";
import * as Yup from 'yup';
import { withFormik } from 'formik';

import * as Styles from '../styles/'

import ImgSubmit from '../img/Submit.png'

import PopupWindowSucces from "./PopupWindowSucces";




import createHistory from 'history/createBrowserHistory';
var history = createHistory();


const InputFeedback = ({ error }) =>
  error ? (
    <Styles.ErrorText className="error">
        {error}
    </Styles.ErrorText>
  ) : null;

const CoworkerField = ({
  type,
  id,
  label,
  error,
  value,
  onChange,
  className,
  ...props
}) => {
  return (
    <Styles.InputCoworkerField className={className}>
        <label htmlFor={id} error={error}>
            <Styles.InputCoworkerLabelP>
                {label}
            </Styles.InputCoworkerLabelP>
        </label>
        <input
            id={id}
            className="text-input"
            type={type}
            value={value}
            onChange={onChange}
            {...props}
        />
        <InputFeedback error={error} />
    </Styles.InputCoworkerField>
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

		if( !this.state.wasSubmittingOnce && isSubmitting )
			this.setState({ wasSubmittingOnce: true });
		
		return (
			<form onSubmit={handleSubmit}>
			  <CoworkerField
				id="firstName"
				type="text"
				label="Имя"
				placeholder="Моё имя"
				error={(this.state.wasSubmittingOnce || touched.firstName) && errors.firstName}
				value={values.firstName}
				onChange={handleChange}
				onBlur={handleBlur}
			  />
			  <CoworkerField
				id="lastName"
				type="text"
				label="Фамилия"
				placeholder="Моя фамилия"
				error={(this.state.wasSubmittingOnce || touched.lastName) && errors.lastName}
				value={values.lastName}
				onChange={handleChange}
				onBlur={handleBlur}
			  />
			  <CoworkerField
				id="post"
				type="text"
				label="Должность"
				placeholder="Моя должность"
				error={(this.state.wasSubmittingOnce || touched.post) && errors.post}
				value={values.post}
				onChange={handleChange}
				onBlur={handleBlur}
			  />
			  <CoworkerField
				id="dateWasBorn"
				type="date"
				label="Дата рождения"
				error={(this.state.wasSubmittingOnce || touched.dateWasBorn) && errors.dateWasBorn}
				value={values.dateWasBorn}
				onChange={handleChange}
				onBlur={handleBlur}
			  />
			  <CoworkerField
				id="email"
				type="email"
				label="Email"
				placeholder="Мой email"
				error={(this.state.wasSubmittingOnce || touched.email) && errors.email}
				value={values.email}
				onChange={handleChange}
				onBlur={handleBlur}
			  />
			  <Styles.button type="submit" disabled={isSubmitting}>
                  <Styles.Icon src={ImgSubmit}/>
			  </Styles.button>
			  
				<PopupWindowSucces opened={isSubmitting} />
			  
			</form>
		);
	}
};


const MyEnhancedForm = withFormik({
  validationSchema: Yup.object().shape({
    firstName: Yup.string()
      .max(15, 'Максимальная длина имени 15 символов')
	  .matches(/^([А-Яа-я]*)$/u, 'Имя должно быть написана на русском языке')
      .required('Поле пусто'),
    lastName: Yup.string()
      .max(15, 'Максимальная длина фамилии 15 символов')
	  .matches(/^([А-Яа-я]*)$/u, 'Фамилия должна быть написана на русском языке')
      .required('Поле пусто'),
    email: Yup.string()
      .email('Невалидный email адрес')
      .required('Поле пусто'),
    post: Yup.string()
      .required('Поле пусто'),
    dateWasBorn: Yup.date()
		.typeError('Неверный формат даты')
		.max(new Date(), 'Это невозможно')
      .required('Поле пусто')
  }),
  
  handleSubmit: (values, { props, setSubmitting }) => {
      var retValues = {...values};
      retValues.dateWasBorn = new Date(values.dateWasBorn).getTime();

      props.addCoworker(retValues);
      setTimeout(() => props.history.push('/list'), 1500);
  },
  
  displayName: 'MyForm',
})(MyForm);



export default withRouter(MyEnhancedForm);