import React from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { showSignIn } from '../../../SignInModal/SignInModal/SignInModalSlice.js';
import './ReplyBtn.css';

const ReplyBtn = ({ onClick }) => {
	const dispatch = useDispatch();
	const { token } = useSelector(state => state.user);

	const handleClick = () => {
		if (!token) {
			dispatch(showSignIn());
		} else {
			onClick();
		}
	};

	return (
		<div onClick={handleClick} className='text-muted clickable btn p-0 ms-4 reply-btn'>
			REPLY
		</div>
	);
};

export default ReplyBtn;
