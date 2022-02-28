import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { signUp } from '../../../Redux/userSlice.js';
import FormField from '../../Common/FormField/FormField.jsx';
import { setForm } from './SignUpFormSlice.js';

const SignUpForm = props => {
	// STATE
    const signUpForm = useSelector(state => state.signUpForm);
	const {first_name, last_name, email, username, password, confirmPassword, error } = signUpForm
	const dispatch = useDispatch();

	// HANDLERS
    const handleChange = e => dispatch(setForm({[e.target.name]: e.target.value}))
    

	const handleSubmit = e => {
		e.preventDefault();
        dispatch(signUp(signUpForm));
	};

	return (
		<form onSubmit={handleSubmit} id='sign-up-form'>
			<FormField name="username" label='Username' value={username} onChange={handleChange} />
			<FormField name="password" type='password' label='Password' value={password} onChange={handleChange} />
			<FormField name="confirmPassword" type='password' label='Confirm Password' value={confirmPassword} onChange={handleChange} />
			<FormField name="email" label='Email' value={email} onChange={handleChange} />
			<FormField name="first_name" label='First Name' value={first_name} onChange={handleChange} />
			<FormField name="last_name" label='Last Name' value={last_name} onChange={handleChange} />
			<span className='text-danger'>{error}</span>
		</form>
	);
};

export default SignUpForm;