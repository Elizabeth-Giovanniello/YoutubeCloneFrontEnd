import { Button } from '@mui/material';
import React from 'react';
import { Modal } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { hide } from './signInSlice.js';

const SignInModal = props => {
	const show = useSelector(state => state.displaySignInModal);
	const dispatch = useDispatch();

	return (
		<Modal show={show} centered>
			<Modal.Header>
				<Modal.Title>Sign into your Account</Modal.Title>
			</Modal.Header>
			<Modal.Body>Form GOEs Here</Modal.Body>
			<Modal.Footer>
				<Button onClick={() => dispatch(hide())} variant='text'>
					Cancel
				</Button>
				<Button variant='contained'>Sign In</Button>
			</Modal.Footer>
		</Modal>
	);
};

export default SignInModal;
