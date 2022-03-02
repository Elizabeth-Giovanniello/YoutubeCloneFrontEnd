import React from 'react';
import { ThumbUpOffAlt, ThumbUpAlt } from '@mui/icons-material';
import { useDispatch, useSelector } from 'react-redux';
import { toggleLikePath } from '../../../Constants/apiPaths';
import { AUTH_HEADER } from '../../../Helpers/requests';
import axios from 'axios';
import { fetchComments } from '../Comments/CommentsSlice';

const LikeButton = ({ type, response }) => {
	const { user_id } = useSelector(state => state.user);
	const dispatch = useDispatch();

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
			<span variant='basic' className='clickable btn' onClick={() => toggleLike()}>
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
			<small className='text-muted'> {response.likes.length} </small>
		</>
	);
};

export default LikeButton;
