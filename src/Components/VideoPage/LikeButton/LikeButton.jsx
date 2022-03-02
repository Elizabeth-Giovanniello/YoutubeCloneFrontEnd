import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { ThumbUpOffAlt, ThumbDownOffAlt, ThumbUpAlt, ThumbDownAlt } from '@mui/icons-material';
import { useDispatch, useSelector } from 'react-redux';
import { toggleLikePath } from '../../../Constants/apiPaths';
import { AUTH_HEADER } from '../../../Helpers/requests';
import axios from 'axios';
import { fetchComments } from '../Comments/CommentsSlice';

const LikeButton = ({ type, response }) => {
	const { user_id } = useSelector(state => state.user);
	const dispatch = useDispatch();

	async function toggleLike() {
		let response = await axios
			.put(toggleLikePath(type, response.id), '', AUTH_HEADER)
			.then(response => {
				console.log(response);
				dispatch(fetchComments());
			})
			.catch(error => {
				console.log(error.response);
			});
	}

	return (
		//button checks to see if the user has liked the response, and changes the button fill accordingly
		<>
			<Button variant='basic' onClick={() => toggleLike()}>
				{response.likes
					.map(function (like) {
						return like.user;
					})
					.includes(user_id) ? (
					<ThumbUpAlt fontSize='small' />
				) : (
					<ThumbUpOffAlt fontSize='small' />
				)}
			</Button>
			<small className='text-muted'> {response.likes.length} </small>
		</>
	);
};

export default LikeButton;
