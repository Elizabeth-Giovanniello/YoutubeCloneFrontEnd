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

	return (
		<div>
			<SingleComment />
			<SingleComment />
			<SingleComment />
		</div>
	);
};

export default Comments;
