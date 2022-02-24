import { TextField } from '@mui/material';
import React from 'react';

const FormField = ({ label, value, onChange, type = 'text' }) => {
	return (
		<TextField
			required
			type={type}
			className='mb-3'
			fullWidth
			label={label}
			value={value}
			onChange={onChange}
		/>
	);
};

export default FormField;
