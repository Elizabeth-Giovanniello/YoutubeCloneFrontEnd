import React from 'react';
import { Button } from '@mui/material';
import { useDispatch } from 'react-redux';
import { closeSignIn } from '../../SignInModal/SignInModal/SignInModalSlice.js';

const SignUpBtn = ({ variant = 'text' }) => {
	const dispatch = useDispatch();
	const handleClick = () => {
		console.log('click');
		dispatch(closeSignIn());
		// dipsatch open signup model
	};
	return (
		<Button onClick={handleClick} variant={variant}>
			sign up
		</Button>
	);
};

export default SignUpBtn;
