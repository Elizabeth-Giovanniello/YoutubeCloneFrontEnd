import React from 'react';
import SignInButton from '../Common/SignInButton/SignInButton.jsx';
import SubmitBtn from '../Common/SubmitBtn/SubmitBtn.jsx';
import UserModal from '../Common/UserModal/UserModal.jsx';

const SignUpModal = props => {
	const handleHide = () => {};

	const modalProps = {
		title: 'Create new account',
		titleBtn: <SignInButton />,
		form: 'form goes here',
		submitBtn: <SubmitBtn formId='sign-up-form' />,
		// show,
		hide: handleHide,
	};

	return <UserModal {...modalProps} />;
};

export default SignUpModal;
