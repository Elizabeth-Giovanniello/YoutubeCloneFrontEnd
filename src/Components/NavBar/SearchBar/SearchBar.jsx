import { TextField } from '@mui/material';
import React from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import SearchBtn from './SearchBtn/SearchBtn.jsx';
import { setSearchTerm } from './SearchSlice.js';

import './SearchBar.css';

const SearchBar = props => {
	// STATE
	const dispatch = useDispatch();
	const searchTerm = useSelector(state => state.searchTerm);

	const handleSearchTerm = e => {
		dispatch(setSearchTerm(e.target.value));
	};

	const handleSubmit = e => {
		e.preventDefault();
	};

	return (
		<div className='search-bar_wrapper'>
			<form id='search-form' onSubmit={handleSubmit}>
				<TextField
					value={searchTerm}
					onChange={handleSearchTerm}
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
