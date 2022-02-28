import React from 'react';

import { InputAdornment } from '@mui/material';
import ClearIcon from '@mui/icons-material/Clear';

import { useDispatch, useSelector } from 'react-redux';
import { setSearchTerm } from '../SearchSlice.js';

import './ClearBtn.css';

const ClearBtn = props => {
	// STATE
	const dispatch = useDispatch();
	const searchTerm = useSelector(state => state.search.term);

	const show = searchTerm ? '' : 'd-none';

	const handleClick = () => {
		dispatch(setSearchTerm(''));
	};
	return (
		<div className={`clear-search-btn ${show}`} onClick={handleClick}>
			<InputAdornment position='end'>
				<ClearIcon className='text-muted' />
			</InputAdornment>
		</div>
	);
};

export default ClearBtn;
