import React from 'react';
import SignInButton from '../Common/SignInButton/SignInButton.jsx';
import SubmitBtn from '../Common/SubmitBtn/SubmitBtn.jsx';
import UserModal from '../Common/UserModal/UserModal.jsx';
import SignUpForm from './SignUpForm/SignUpForm.jsx';
import { useDispatch, useSelector } from 'react-redux';
import { hideSignUp } from './SignUpModalSlice.js';

const SignUpModal = props => {
	const dispatch = useDispatch();

	const handleHide = () => {
		dispatch(hideSignUp());
	};

	const show = useSelector(state => state.displaySignUpModal);

	const modalProps = {
		title: 'Create new account',
		titleBtn: <SignInButton variant='text' />,
		form: <SignUpForm />,
		submitBtn: <SubmitBtn formId='sign-up-form' title='Sign Up' />,
		show: show,
		hide: handleHide,
	};

	return <UserModal {...modalProps} />;
};

export default SignUpModal;
