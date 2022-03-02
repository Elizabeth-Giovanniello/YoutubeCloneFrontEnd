import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import SingleComment from '../SingleComment/SingleComment.jsx';
import { fetchComments } from './CommentsSlice.js';

const Comments = props => {
	const dispatch = useDispatch();
	const { comments } = useSelector(state => state);

	useEffect(() => {
		dispatch(fetchComments());
	}, [dispatch]);

	const allComments = comments.map((comment, i) =>
		comment ? <SingleComment key={i} comment={comment} /> : null,
	);

	return <div>{allComments}</div>;
};

export default Comments;
