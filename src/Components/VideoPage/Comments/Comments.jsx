import axios from 'axios';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleDislikePath, toggleLikePath } from '../../../Constants/apiPaths.js';
import { AUTH_HEADER } from '../../../Helpers/requests.js';
import SingleComment from '../SingleComment/SingleComment.jsx';
import { fetchComments } from './CommentsSlice.js';

const Comments = props => {
	const dispatch = useDispatch();
	const { comments } = useSelector(state => state);
	const { videoId } = useSelector(state => state);

	useEffect(() => {
		if (videoId) dispatch(fetchComments());
	}, [videoId]);

	async function toggleLike() {
		//need to include authorization header somehow?

		let response = await axios
			.put(toggleLikePath, AUTH_HEADER)
			.then(response => {
				console.log(response);
			})
			.catch(error => {
				console.log(error.response);
			});
	}

	async function toggleDislike() {
		let response = await axios
			.put(toggleDislikePath, AUTH_HEADER)
			.then(response => {
				console.log(response);
			})
			.catch(error => {
				console.log(error.response);
			});
	}

	const allComments = comments.map((comment, i) =>
		comment ? (
			<SingleComment
				key={i}
				comment={comment}
				toggleLike={toggleLike}
				toggleDislike={toggleDislike}
			/>
		) : null,
	);

	return <div>{allComments}</div>;
};

export default Comments;