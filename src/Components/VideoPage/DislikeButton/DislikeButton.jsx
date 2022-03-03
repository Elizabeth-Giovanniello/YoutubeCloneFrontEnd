import React from 'react';
import { ThumbDownOffAlt, ThumbDownAlt } from '@mui/icons-material';
import { useDispatch, useSelector } from 'react-redux';
import { toggleDislikePath } from '../../../Constants/apiPaths';
import axios from 'axios';
import { authHeader } from '../../../Helpers/requests';
import { fetchComments } from '../Comments/CommentsSlice';
import { showSignIn } from '../../SignInModal/SignInModal/SignInModalSlice.js';

const DislikeButton = ({ type, response }) => {
	const user_id = useSelector(state => state.user.user_id);
	const dispatch = useDispatch();

	const handleClick = () => (!user_id ? dispatch(showSignIn()) : toggleDislike());

	async function toggleDislike() {
		await axios
			.put(toggleDislikePath(type, response.id), '', authHeader())
			.then(res => {
				dispatch(fetchComments());
			})
			.catch(error => {
				console.log(error.response);
			});
	}

	return (
		//button checks to see if the user has liked the response, and changes the button fill accordingly
		<span className='clickable btn p-0 ms-3' variant='basic' onClick={handleClick}>
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
