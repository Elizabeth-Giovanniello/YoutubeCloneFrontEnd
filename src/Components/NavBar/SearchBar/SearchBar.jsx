import { InputAdornment, TextField } from '@mui/material';
import React, { useState } from 'react';
import FormField from '../../Common/FormField/FormField.jsx';

import './SearchBar.css';
import SearchBtn from './SearchBtn/SearchBtn.jsx';

const SearchBar = props => {
	// STATE
	const [search, setSearch] = useState('');

	const handleSearch = e => {
		setSearch(e.target.value);
	};

	const handleSubmit = e => {
		e.preventDefault();
		console.log('searching for: ', search);
	};

	return (
		<div className='search-bar_wrapper'>
			<form id='search-form' onSubmit={handleSubmit}>
				<TextField
					value={search}
					onChange={handleSearch}
					className='search-bar'
					autoComplete='off'
					label='Search'
					fullWidth
					size='small'
					InputProps={{
						className: 'search-bar_input',
						endAdornment: <SearchBtn />,
					}}
					InputLabelProps={{ className: 'search-bar_input_label' }}
				/>
			</form>
		</div>
	);
};

export default SearchBar;
