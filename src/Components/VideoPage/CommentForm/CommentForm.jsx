import { Button, TextField } from '@mui/material';
import React, { useState } from 'react';

const CommentForm = props => {
	const [focused, setFocused] = useState(false);

	const handleFocus = () => {
		setFocused(true);
	};

	const handleCancel = () => {
		setFocused(false);
	};

	const showBtns = focused ? '' : 'd-none';

	return (
		<div className='py-1'>
			<form id='comment-form'>
				<div>
					<TextField
						onFocus={handleFocus}
						fullWidth
						autoComplete='off'
						label='Add a comment...'
						variant='standard'
					/>
				</div>
				<div className='d-flex justify-content-between py-1'>
					<div></div>
					<div className={showBtns}>
						<Button onClick={handleCancel} variant='text' className='ms-3'>
							CANCEL
						</Button>
						<Button variant='contained' className='ms-3'>
							COMMENT
						</Button>
					</div>
				</div>
			</form>
		</div>
	);
};

export default CommentForm;
