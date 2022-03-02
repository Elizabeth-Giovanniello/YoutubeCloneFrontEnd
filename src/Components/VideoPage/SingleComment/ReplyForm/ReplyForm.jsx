import axios from 'axios';
import React from 'react';
import { useDispatch } from 'react-redux';
import { addReplyPath } from '../../../../Constants/apiPaths.js';
import { AUTH_HEADER } from '../../../../Helpers/requests.js';
import ResponseForm from '../../../Common/ResponseForm/ResponseForm.jsx';
import { fetchComments } from '../../Comments/CommentsSlice.js';

const ReplyForm = ({ comment, onCancel, setNewReply }) => {
	const dispatch = useDispatch();

	const handleSubmit = async reply => {
		const res = await axios.post(addReplyPath, { body: reply, comment: comment.id }, AUTH_HEADER);
		setNewReply(res.data);
		dispatch(fetchComments());
	};

	return <ResponseForm type='reply' onSubmit={handleSubmit} onCancel={onCancel} />;
};

export default ReplyForm;
