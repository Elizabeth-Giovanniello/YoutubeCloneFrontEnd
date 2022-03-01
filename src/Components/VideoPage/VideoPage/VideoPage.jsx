import React, { useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import CommentForm from '../CommentForm/CommentForm.jsx';
import RelatedVideos from '../RelatedVideos/RelatedVideos.jsx';
import SingleComment from '../SingleComment/SingleComment.jsx';
import TitleBar from '../TitleBar/TitleBar.jsx';
import VideoPlayer from '../VideoPlayer/VideoPlayer';
import { getRelatedVideos, getSnippet } from './VideoSlice.js';

const VideoPage = props => {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getSnippet());
		dispatch(getRelatedVideos());
	}, []);

	return (
		<>
			<VideoPlayer fullscreen />
			<Container>
				<Row className='mt-3'>
					<Col xs={8}>
						<TitleBar />
						<CommentForm />
						<div className='m-5 p-5'>EXTENDER</div>
						<SingleComment/>
					</Col>
					<Col xs={4}>
						<RelatedVideos />
					</Col>
				</Row>
			</Container>
		</>
	);
};

export default VideoPage;
