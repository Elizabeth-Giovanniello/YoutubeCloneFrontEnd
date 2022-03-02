import React from 'react';
import { CaretDownFill, CaretUpFill } from 'react-bootstrap-icons';
import './RepliesBtn.css';

const RepliesBtn = ({ open, onClick }) => {
	const handleClick = () => {
		onClick(!open);
	};
	return (
		<div className='text-primary ps-0 clickable replies-btn' onClick={handleClick}>
			{open ? <CaretUpFill /> : <CaretDownFill />}
			{open ? ' Hide' : ' View'} replies
		</div>
	);
};

export default RepliesBtn;
