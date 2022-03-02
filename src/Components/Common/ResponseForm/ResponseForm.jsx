import { Button, TextField } from '@mui/material';
import React, { useState } from 'react';

const ResponseForm = ({ type, onSubmit, onCancel, resBody = '', action="save" }) => {
	const [response, setResponse] = useState(resBody);

	const handleChange = e => {
		setResponse(e.target.value);
	};

	const handleSubmit = e => {
		e.preventDefault();
		onSubmit(response);
		setResponse('');
		onCancel();
	};

	return (
		<div className='py-1'>
			<form id={`${type}-form`} onSubmit={handleSubmit}>
				<div>
					<TextField
						fullWidth
						autoComplete='off'
						label={`Add a ${type}...`}
						variant='standard'
						value={response}
						onChange={handleChange}
					/>
				</div>
				<div className='d-flex justify-content-between py-1'>
					<div></div>
					<div>
						<Button onClick={onCancel} variant='text' className='ms-3'>
							CANCEL
						</Button>
						<Button form={`${type}-form`} type='submit' variant='contained' className='ms-3'>
							{action.toUpperCase()}
						</Button>
					</div>
				</div>
			</form>
		</div>
	);
};

export default ResponseForm;

//props that will need to be passed in: type={reply}, handleSubmit={handleSumbit}, setShowFomr={setShowReplyForm} response={reply.body}
