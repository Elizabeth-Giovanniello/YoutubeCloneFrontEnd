import React, { useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { HOME } from '../../../Constants/routes.js';
import CommentForm from '../CommentForm/CommentForm.jsx';
import Comments from '../Comments/Comments.jsx';
import RelatedVideos from '../RelatedVideos/RelatedVideos.jsx';
import SingleComment from '../SingleComment/SingleComment.jsx';
import TitleBar from '../TitleBar/TitleBar.jsx';
import VideoPlayer from '../VideoPlayer/VideoPlayer';
import { fetchVideoData, getRelatedVideos, getSnippet } from './VideoSlice.js';

const VideoPage = props => {
	const navigate = useNavigate();
	const dispatch = useDispatch();

	// STATE
	const { videoId } = useSelector(state => state);

	useEffect(() => {
		if (videoId) dispatch(fetchVideoData());
	}, [videoId]);

	return (
		<>
			<VideoPlayer fullscreen />
			<Container>
				<Row className='mt-3'>
					<Col xs={8}>
						<TitleBar />
						<CommentForm />
						<Comments />
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
