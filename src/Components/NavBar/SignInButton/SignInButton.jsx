import { Button } from '@mui/material';
import React from 'react';
import { useDispatch } from 'react-redux';
import { show } from '../../SignInModal/SignInModal/SignInModalSlice.js';

const SignInButton = ({ variant = 'outlined' }) => {
	const dispatch = useDispatch();

	const handleClick = () => dispatch(show());

	return (
		<Button onClick={handleClick} variant={variant}>
			Sign In
		</Button>
	);
};

export default SignInButton;
