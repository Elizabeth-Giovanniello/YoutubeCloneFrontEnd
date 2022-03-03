import React from 'react';
import { CaretDownFill, CaretUpFill } from 'react-bootstrap-icons';
import './RepliesBtn.css';

const RepliesBtn = ({ open, onClick }) => {
	return (
		<div className='text-primary ps-3 clickable replies-btn' onClick={onClick}>
			{open ? <CaretUpFill /> : <CaretDownFill />}
			{open ? ' Hide' : ' View'} replies
		</div>
	);
};

export default RepliesBtn;
