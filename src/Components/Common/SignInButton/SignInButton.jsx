import { Button } from '@mui/material';
import React from 'react';
import { useDispatch } from 'react-redux';
import { showSignIn } from '../../SignInModal/SignInModal/SignInModalSlice.js';
import { closeSignUp } from '../../SignUpModal/SignUpModalSlice.js';

const SignInButton = ({ variant = 'outlined' }) => {
	const dispatch = useDispatch();

	const handleClick = () => {
		dispatch(closeSignUp());
		dispatch(showSignIn());
	}

	return (
		<Button onClick={handleClick} variant={variant}>
			Sign In
		</Button>
	);
};

export default SignInButton;
