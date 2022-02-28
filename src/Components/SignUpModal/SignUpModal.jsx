import React from 'react';
import SignInButton from '../Common/SignInButton/SignInButton.jsx';
import SubmitBtn from '../Common/SubmitBtn/SubmitBtn.jsx';
import UserModal from '../Common/UserModal/UserModal.jsx';
import SignUpForm from './SignUpForm/SignUpForm.jsx';

const SignUpModal = props => {
	const handleHide = () => {};

	const modalProps = {
		title: 'Create new account',
		titleBtn: <SignInButton variant="text"/>,
		form: <SignUpForm/>,
		submitBtn: <SubmitBtn formId='sign-up-form' />,
		show: true,
		hide: handleHide,
	};

	return <UserModal {...modalProps} />;
};

export default SignUpModal;
