import React from 'react';
import { ThumbUpOffAlt, ThumbUpAlt } from '@mui/icons-material';
import { useDispatch, useSelector } from 'react-redux';
import { toggleLikePath } from '../../../Constants/apiPaths';
import { AUTH_HEADER } from '../../../Helpers/requests';
import axios from 'axios';
import { fetchComments } from '../Comments/CommentsSlice';
import { showSignIn } from '../../SignInModal/SignInModal/SignInModalSlice.js';

const LikeButton = ({ type, response }) => {
	const { user_id } = useSelector(state => state.user);
	const dispatch = useDispatch();

	const handleClick = () => (!user_id ? dispatch(showSignIn()) : toggleLike());

	async function toggleLike() {
		await axios
			.put(toggleLikePath(type, response.id), '', AUTH_HEADER)
			.then(res => {
				dispatch(fetchComments());
			})
			.catch(error => {
				console.log(error.response);
			});
	}

	return (
		//button checks to see if the user has liked the response, and changes the button fill accordingly
		<>
			<span variant='basic' className='clickable btn p-0' onClick={handleClick}>
				{response.likes
					.map(function (like) {
						return like.user;
					})
					.includes(user_id) ? (
					<ThumbUpAlt fontSize='small' />
				) : (
					<ThumbUpOffAlt fontSize='small' />
				)}
			</span>
			{response.likes.length > 0 && <small className='text-muted'> {response.likes.length} </small>}
		</>
	);
};

export default LikeButton;
