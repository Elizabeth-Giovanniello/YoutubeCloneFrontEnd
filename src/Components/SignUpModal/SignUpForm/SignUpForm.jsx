import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { signUp } from '../../../Redux/userSlice.js';
import FormField from '../../Common/FormField/FormField.jsx';
import { setSignUpError, setForm } from './SignUpFormSlice.js';

const SignUpForm = props => {
	// STATE
	const signUpForm = useSelector(state => state.signUpForm);
	const { email, username, password, confirmPassword, error, pwError } = signUpForm;
	const dispatch = useDispatch();

	useEffect(() => {
		password !== confirmPassword
			? dispatch(setSignUpError('Passwords do not match.'))
			: dispatch(setSignUpError(''));
	}, [password, confirmPassword]);

	// HANDLERS
	const handleChange = e => {
		dispatch(setForm({ [e.target.name]: e.target.value }));
	};

	const handleSubmit = e => {
		e.preventDefault();
		dispatch(signUp(signUpForm));
	};

	return (
		<form onSubmit={handleSubmit} id='sign-up-form'>
			<FormField name='username' label='Username' value={username} onChange={handleChange} />
			<p className='text-danger'>{pwError}</p>
			<FormField name='email' label='Email' value={email} onChange={handleChange} />
			<FormField
				name='password'
				type='password'
				label='Password'
				value={password}
				onChange={handleChange}
			/>
			<FormField
				name='confirmPassword'
				type='password'
				label='Confirm Password'
				value={confirmPassword}
				onChange={handleChange}
			/>
			<span className='text-danger'>{error}</span>
		</form>
	);
};

export default SignUpForm;
