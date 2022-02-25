import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import FormField from '../../Common/FormField/FormField.jsx';
import { hideSignIn } from '../SignInModal/SignInModalSlice.js';
import { signIn, setUsername, setPassword, clearForm } from './SignInFormSlice.js';

const SignInForm = props => {
	// STATE

	const { username, password, error } = useSelector(state => state.signInForm);

	const dispatch = useDispatch();

	// HANDLERS
	const handleUsername = e => dispatch(setUsername(e.target.value));
	const handlePassword = e => dispatch(setPassword(e.target.value));

	const handleSubmit = e => {
		e.preventDefault();
		dispatch(signIn({ username, password }));
	};

	return (
		<form onSubmit={handleSubmit} id='sign-in-form'>
			<FormField label='Username' value={username} onChange={handleUsername} />
			<FormField type='password' label='Password' value={password} onChange={handlePassword} />
			<span className='text-danger'>{error}</span>
		</form>
	);
};

export default SignInForm;
