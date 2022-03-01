import React from 'react';
import { Button, InputAdornment } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

import './SearchBtn.css';
import { Link } from 'react-router-dom';

const SearchBtn = props => {
	return (
		<InputAdornment className='search-btn-wrapper' position='end'>
			<Link to='/search'>
				<Button type='submit' form='search-form' color='primary' variant='contained'>
					<SearchIcon />
				</Button>
			</Link>
		</InputAdornment>
	);
};

export default SearchBtn;
