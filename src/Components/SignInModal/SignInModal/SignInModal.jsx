import { Button } from '@mui/material';
import React from 'react';
import { Modal } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import SignInForm from '../SignInForm/SignInForm.jsx';
import { closeSignIn } from './SignInModalSlice.js';

const SignInModal = props => {
	const show = useSelector(state => state.displaySignInModal);
	const dispatch = useDispatch();

	function handleHide() {
		dispatch(closeSignIn());
	}

	return (
		<Modal show={show} centered onHide={handleHide}>
			<Modal.Header>
				<Modal.Title>Sign into your Account</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<SignInForm />
			</Modal.Body>
			<Modal.Footer>
				<Button onClick={handleHide} variant='text'>
					Cancel
				</Button>
				<Button form='sign-in-form' type='submit' variant='contained'>
					Sign In
				</Button>
			</Modal.Footer>
		</Modal>
	);
};

export default SignInModal;
