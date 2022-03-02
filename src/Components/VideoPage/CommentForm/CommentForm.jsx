import { Button, TextField } from '@mui/material';
import axios from 'axios';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { addCommentPath } from '../../../Constants/apiPaths.js';
import { addCommentReq, AUTH_HEADER, TOKEN } from '../../../Helpers/requests.js';
import { showSignIn } from '../../SignInModal/SignInModal/SignInModalSlice.js';
import { fetchComments } from '../Comments/CommentsSlice.js';

const CommentForm = props => {
	// STATE
	const dispatch = useDispatch();
	const { token } = useSelector(state => state.user);

	const { videoId, user } = useSelector(state => state);
	const [focused, setFocused] = useState(false);
	const [comment, setComment] = useState('');

	const postComment = async e => {
		e.preventDefault();
		await axios.post(addCommentPath, addCommentReq(comment, user.user_id, videoId), AUTH_HEADER);
		dispatch(fetchComments());
	};

	const handleFocus = () => {
		setFocused(true);
	};

	const handleFieldClick = () => {
		if (!token) {
			dispatch(showSignIn());
			setFocused(false);
		}
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
						onClick={handleFieldClick}
						disabled={token === ''}
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
