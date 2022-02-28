import { TextField } from '@mui/material';
import React from 'react';

const FormField = ({ label, value, onChange, name, type = 'text' }) => {
	return (
		<TextField
			required
			type={type}
			name={name}
			className='mb-3'
			fullWidth
			label={label}
			value={value}
			onChange={onChange}
		/>
	);
};

export default FormField;
