import { Button, TextField } from '@mui/material';
import axios from 'axios';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { addCommentPath } from '../../../Constants/apiPaths.js';

const CommentForm = props => {
	const { selectedVideo, user } = useSelector(state => state);
	const [focused, setFocused] = useState(false);
	const [comment, setComment] = useState('');

	const postComment = async e => {
		e.preventDefault();
		await axios.post(
			addCommentPath,
			{
				body: comment,
				user_id: user.user_id,
				video_id: selectedVideo.videoId,
			},
			{
				headers: {
					authorization: `Bearer ${localStorage.getItem('token')}`,
				},
			},
		);
	};

	const handleFocus = () => {
		setFocused(true);
	};

	const handleCancel = () => {
		setFocused(false);
	};

	const handleChange = e => {
		setComment(e.target.value);
	};

	const showBtns = focused ? '' : 'd-none';

	return (
		<div className='py-1'>
			<form id='comment-form' onSubmit={postComment}>
				<div>
					<TextField
						onFocus={handleFocus}
						fullWidth
						autoComplete='off'
						label='Add a comment...'
						variant='standard'
						value={comment}
						onChange={handleChange}
					/>
				</div>
				<div className='d-flex justify-content-between py-1'>
					<div></div>
					<div className={showBtns}>
						<Button onClick={handleCancel} variant='text' className='ms-3'>
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

export default CommentForm;
