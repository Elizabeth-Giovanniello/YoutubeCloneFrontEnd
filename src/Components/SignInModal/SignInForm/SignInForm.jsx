import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import FormField from '../../Common/FormField/FormField.jsx';
import { hide } from '../SignInModal/SignInModalSlice.js';

const SignInForm = props => {
	// STATE
	const dispatch = useDispatch();
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	// TODO: setup error handling
	const [error, setError] = useState('');

	// HANDLERS
	const handleUsername = e => setUsername(e.target.value);
	const handlePassword = e => setPassword(e.target.value);

	const handleSubmit = e => {
		e.preventDefault();
		console.log('sign in form submitted');
		dispatch(hide());
		clearForm();
		// dispatch the login action
	};

	const clearForm = () => {
		setUsername('');
		setPassword('');
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
