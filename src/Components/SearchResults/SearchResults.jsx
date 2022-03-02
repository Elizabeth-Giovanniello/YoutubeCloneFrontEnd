import React, { useEffect } from 'react';
import { Container } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { HOME } from '../../Constants/routes.js';
import VideoCardHorizontal from '../Common/VideoCardHorizontal/VideoCardHorizontal';

const SearchResults = props => {
	const navigate = useNavigate();
	const searchResults = useSelector(state => state.search.results);

	useEffect(() => {
		!searchResults.length && navigate(HOME);
	}, []);

	return (
		<Container>
			{searchResults.map(function (video) {
				return <VideoCardHorizontal key={video.id.videoId} video={video} />;
			})}
		</Container>
	);
};

export default SearchResults;
