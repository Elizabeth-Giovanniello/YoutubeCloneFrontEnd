import axios from 'axios';
import React from 'react';
import { useDispatch } from 'react-redux';
import { addReplyPath } from '../../../../Constants/apiPaths.js';
import { authHeader } from '../../../../Helpers/requests.js';
import ResponseForm from '../../../Common/ResponseForm/ResponseForm.jsx';
import { fetchComments } from '../../Comments/CommentsSlice.js';

const ReplyForm = ({ comment, onCancel, setNewReply }) => {
	const dispatch = useDispatch();

	const handleSubmit = async reply => {
		const res = await axios.post(addReplyPath, { body: reply, comment: comment.id }, authHeader());
		setNewReply(res.data);
		dispatch(fetchComments());
	};

	return <ResponseForm type='reply' onSubmit={handleSubmit} onCancel={onCancel} action={'reply'} />;
};

export default ReplyForm;
