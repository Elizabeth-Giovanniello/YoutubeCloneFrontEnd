import { Button } from '@mui/material';
import React from 'react';

const SubmitBtn = ({ formId }) => {
	return (
		<Button form={formId} type='submit' variant='contained'>
			Sign In
		</Button>
	);
};

export default SubmitBtn;
