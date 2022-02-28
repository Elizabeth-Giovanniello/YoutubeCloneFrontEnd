import { Button } from '@mui/material';
import React from 'react';

const SubmitBtn = ({ formId, title }) => {
	return (
		<Button form={formId} type='submit' variant='contained'>
			{title}
		</Button>
	);
};

export default SubmitBtn;
