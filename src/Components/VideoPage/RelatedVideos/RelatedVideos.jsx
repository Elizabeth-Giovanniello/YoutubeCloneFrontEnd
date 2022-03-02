import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import VideoCardHorizontal from '../../Common/VideoCardHorizontal/VideoCardHorizontal.jsx';
import { fetchRelatedVideos } from './relatedVideosSlice.js';

const RelatedVideos = props => {
	const dispatch = useDispatch();
	const { relatedVideos } = useSelector(state => state);

	useEffect(() => {
		dispatch(fetchRelatedVideos());
	}, [dispatch]);

	const list = relatedVideos.map((video, i) =>
		video?.snippet ? <VideoCardHorizontal key={video.id.videoId} video={video} /> : null,
	);

	return <div>{list}</div>;
};

export default RelatedVideos;
