import React from 'react';
import { CaretDownFill, CaretUpFill } from 'react-bootstrap-icons';
import './RepliesBtn.css';

const RepliesBtn = ({ open, onClick }) => {
	return (
		<span className='text-primary clickable replies-btn' onClick={onClick}>
			{open ? <CaretUpFill /> : <CaretDownFill />}
			{open ? ' Hide' : ' View'} replies
		</span>
	);
};

export default RepliesBtn;
