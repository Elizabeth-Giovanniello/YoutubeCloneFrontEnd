import React from 'react';
import { Row, Container } from 'react-bootstrap';

import './VideoPanel.css';
import VideoCard from '../../Common/VideoCard/VideoCard';

const VideoPanel = props => {
	return (
		<Container className='mt-5 pb-5 border-bottom'>
			<h3>{props.title}</h3>
			<Row>
				{props.videos.map(function (video) {
					return <VideoCard video={video} />;
				})}
			</Row>
		</Container>
	);
};

export default VideoPanel;
