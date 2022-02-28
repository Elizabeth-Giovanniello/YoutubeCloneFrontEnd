import { TextField } from '@mui/material';
import React from 'react';
import FormField from '../../Common/FormField/FormField.jsx';

import './SearchBar.css';

const SearchBar = props => {
	return (
		<div className='search-bar_wrapper'>
			<form>
				<TextField
					className='search-bar'
					autoComplete='off'
					label='Search'
					fullWidth
					size='small'
					InputProps={{ className: 'search-bar_input' }}
					InputLabelProps={{ className: 'search-bar_input_label' }}
				/>
			</form>
		</div>
	);
};

export default SearchBar;
