import { Button } from '@mui/material';
import React from 'react';
import { useDispatch } from 'react-redux';
import { clearUser } from '../../../Redux/userSlice.js';

const LogoutButton = ({ variant = 'outlined' }) => {
	const dispatch = useDispatch();

	const handleClick = () => dispatch(clearUser());

	return (
		<Button onClick={handleClick} variant={variant}>
			Logout
		</Button>
	);
};

export default LogoutButton;
