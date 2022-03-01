import React from 'react';
import { useSelector } from 'react-redux';
import VideoCardHorizontal from '../../Common/VideoCardHorizontal/VideoCardHorizontal.jsx';

const RelatedVideos = props => {
	const { relatedVideos } = useSelector(state => state.selectedVideo);

	const list = relatedVideos.map(video =>
		video?.snippet ? <VideoCardHorizontal key={video.id.videoId} video={video} /> : <></>,
	);

	return <div>{list}</div>;
};

export default RelatedVideos;
