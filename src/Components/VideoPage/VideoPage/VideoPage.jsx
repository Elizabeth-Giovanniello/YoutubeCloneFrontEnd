import React, { useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import CommentForm from '../CommentForm/CommentForm.jsx';
import Comments from '../Comments/Comments.jsx';
import RelatedVideos from '../RelatedVideos/RelatedVideos/RelatedVideos.jsx';
import TitleBar from '../TitleBar/TitleBar.jsx';
import VideoPlayer from '../VideoPlayer/VideoPlayer';
import { fetchVideoData } from './VideoSlice.js';

import './VideoPage.css';

const VideoPage = props => {
	const dispatch = useDispatch();

	// STATE
	const { videoId } = useSelector(state => state);

	useEffect(() => {
		window.scrollTo(0, 0);
		if (videoId) dispatch(fetchVideoData());
	}, [videoId]);

	return (
		<>
			<VideoPlayer fullscreen />
			<Container>
				<Row className='mt-3 vs-lower'>
					<Col sm={12} md={7} lg={7}>
						<TitleBar />
						<CommentForm />
						<Comments />
					</Col>
					<Col lg={5}>
						<RelatedVideos />
					</Col>
				</Row>
			</Container>
		</>
	);
};

export default VideoPage;
