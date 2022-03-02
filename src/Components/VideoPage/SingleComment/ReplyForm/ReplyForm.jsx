import axios from 'axios';
import React from 'react';
import { addReplyPath } from '../../../../Constants/apiPaths.js';
import { AUTH_HEADER } from '../../../../Helpers/requests.js';
import ResponseForm from '../../../Common/ResponseForm/ResponseForm.jsx';

const ReplyForm = ({ comment, onCancel }) => {
	const handleSubmit = async reply => {
		await axios.post(addReplyPath, { body: reply, comment: comment.id }, AUTH_HEADER);
	};

	return <ResponseForm type='reply' onSubmit={handleSubmit} onCancel={onCancel} />;
};

export default ReplyForm;
