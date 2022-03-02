import { CaretDownFill, CaretUpFill } from 'react-bootstrap-icons';
import React from 'react';

const RepliesBtn = ({ open, onClick }) => {
	const handleClick = () => {
		onClick(!open);
	};
	return (
		<div className='text-primary ps-0 clickable' onClick={handleClick}>
			{open ? <CaretUpFill /> : <CaretDownFill />}
			{open ? ' Hide' : ' View'} replies
		</div>
	);
};

export default RepliesBtn;
