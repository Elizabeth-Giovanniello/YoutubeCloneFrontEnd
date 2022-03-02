import React from 'react';
import { Container } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import SearchVideoCard from '../VideoCardSearch/VideoCardSearch.jsx';

const SearchResults = props => {
	const navigate = useNavigate();
	const searchResults = useSelector(state => state.search.results);

	return (
		<Container>
			{searchResults.map(function (video) {
				return <SearchVideoCard key={video.id.videoId} video={video} />;
			})}
		</Container>
	);
};

export default SearchResults;
