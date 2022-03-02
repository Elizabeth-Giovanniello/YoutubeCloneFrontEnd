import React from 'react';
import { ThumbDownOffAlt, ThumbDownAlt } from '@mui/icons-material';
import { useDispatch, useSelector } from 'react-redux';
import { toggleDislikePath } from '../../../Constants/apiPaths';
import axios from 'axios';
import { AUTH_HEADER } from '../../../Helpers/requests';
import { fetchComments } from '../Comments/CommentsSlice';

const DislikeButton = ({ type, response }) => {
	const user_id = useSelector(state => state.user.user_id);
	const dispatch = useDispatch();

	async function toggleDislike() {
		await axios
			.put(toggleDislikePath(type, response.id), '', AUTH_HEADER)
			.then(res => {
				dispatch(fetchComments());
			})
			.catch(error => {
				console.log(error.response);
			});
	}

	return (
		//button checks to see if the user has liked the response, and changes the button fill accordingly
		<span className='clickable btn' variant='basic' onClick={() => toggleDislike()}>
			{response.dislikes
				.map(function (like) {
					return like.user;
				})
				.includes(user_id) ? (
				<ThumbDownAlt fontSize='small' />
			) : (
				<ThumbDownOffAlt fontSize='small' />
			)}
		</span>
	);
};

export default DislikeButton;
