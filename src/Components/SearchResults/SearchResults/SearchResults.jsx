import React, { useEffect } from 'react';
import { Container } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { HOME } from '../../../Constants/routes.js';
import SearchVideoCard from '../VideoCardSearch/VideoCardSearch.jsx';

const SearchResults = props => {
	// HOOKS
	const navigate = useNavigate();

	// STATE
	const { term, results } = useSelector(state => state.search);

	useEffect(() => {
		if (!term) navigate(HOME);
	}, []);

	return (
		<Container>
			{results.map(function (video) {
				return <SearchVideoCard key={video.id.videoId} video={video} />;
			})}
		</Container>
	);
};

export default SearchResults;
