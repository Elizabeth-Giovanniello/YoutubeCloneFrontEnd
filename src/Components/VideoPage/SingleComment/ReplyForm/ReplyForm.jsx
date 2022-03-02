import { Button, TextField } from '@mui/material';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';

const ReplyForm = onCancel => {
	// STATE
	const { token } = useSelector(state => state.user);
	const { videoId, user } = useSelector(state => state);

	// LOCAL STATE
	const [reply, setReply] = useState('');

	// HANDLERS
	const handleChange = e => {
		setReply(e.target.value);
	};

	return (
		<div className='py-1'>
			<form id='comment-form' onSubmit={() => {}}>
				<div>
					<TextField
						fullWidth
						autoComplete='off'
						label='Add a comment...'
						variant='standard'
						value={reply}
						onChange={handleChange}
					/>
				</div>
				<div className='d-flex justify-content-between py-1'>
					<div></div>
					<div>
						<Button onClick={onCancel} variant='text' className='ms-3'>
							CANCEL
						</Button>
						<Button form='comment-form' type='submit' variant='contained' className='ms-3'>
							COMMENT
						</Button>
					</div>
				</div>
			</form>
		</div>
	);
};

export default ReplyForm;
