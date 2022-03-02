import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import SingleComment from '../SingleComment/Comment/SingleComment.jsx';
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
