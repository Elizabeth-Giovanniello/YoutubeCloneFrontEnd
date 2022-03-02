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

	const allComments = comments
		.map((comment, i) => (comment ? <SingleComment key={i} comment={comment} /> : null))
		.reverse();

	return <div>{allComments}</div>;
};

export default Comments;
