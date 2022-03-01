import { TextField } from '@mui/material';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import SearchBtn from './SearchBtn/SearchBtn.jsx';
import { executeSearch, setSearchTerm } from './SearchSlice.js';

import './SearchBar.css';
import ClearBtn from './ClearBtn/ClearBtn.jsx';
import { useNavigate } from 'react-router-dom';
import { SEARCH } from '../../../Constants/routes.js';

const SearchBar = props => {
	// STATE
	const dispatch = useDispatch();
	const searchTerm = useSelector(state => state.search.term);

	const handleSearchTerm = e => {
		dispatch(setSearchTerm(e.target.value));
	};

	const navigate = useNavigate();

	const handleSubmit = e => {
		e.preventDefault();
		dispatch(executeSearch(searchTerm));
		navigate(SEARCH);
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
						endAdornment: (
							<>
								<ClearBtn />
								<SearchBtn />
							</>
						),
					}}
					InputLabelProps={{ className: 'search-bar_input_label' }}
				/>
			</form>
		</div>
	);
};

export default SearchBar;
