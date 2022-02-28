import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import SignInForm from '../SignInForm/SignInForm.jsx';
import { closeSignIn } from './SignInModalSlice.js';
import SignUpBtn from '../../Common/SignUpBtn/SignUpBtn.jsx';
import UserModal from '../../Common/UserModal/UserModal.jsx';
import SubmitBtn from '../../Common/SubmitBtn/SubmitBtn.jsx';

const SignInModal = props => {
	const show = useSelector(state => state.displaySignInModal);
	const dispatch = useDispatch();

	function handleHide() {
		dispatch(closeSignIn());
	}

	const modalProps = {
		title: 'Sign in to your account',
		titleBtn: <SignUpBtn />,
		form: <SignInForm />,
		submitBtn: <SubmitBtn formId='sign-in-form' title="Sign In" />,
		show,
		hide: handleHide,
	};

	return <UserModal {...modalProps} />;
};

export default SignInModal;
