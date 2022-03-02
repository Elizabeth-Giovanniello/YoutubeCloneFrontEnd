import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import RelatedVideoCard from '../RelatedVideoCard/RelatedVideoCard.jsx';
import { fetchRelatedVideos } from './relatedVideosSlice.js';

const RelatedVideos = props => {
	const dispatch = useDispatch();

	// STATE
	const { relatedVideos } = useSelector(state => state);
	const { videoId } = useSelector(state => state);

	useEffect(() => {
		if (videoId) dispatch(fetchRelatedVideos());
	}, [videoId]);

	const list = relatedVideos.map((video, i) =>
		video?.snippet ? <RelatedVideoCard key={video.id.videoId} video={video} /> : null,
	);

	return <div>{list}</div>;
};

export default RelatedVideos;
