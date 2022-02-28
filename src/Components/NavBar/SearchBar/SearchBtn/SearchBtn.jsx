import React from 'react';
import { Button, InputAdornment } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

import './SearchBtn.css';

const SearchBtn = props => {
	return (
		<InputAdornment className='search-btn-wrapper' position='end'>
			<Button type='submit' form='search-form' color='primary' variant='contained'>
				<SearchIcon />
			</Button>
		</InputAdornment>
	);
};

export default SearchBtn;
