import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, Row, Col } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { VIDEO } from '../../../Constants/routes';
import './VideoCardHorizontal.css';
import { selectVideo } from '../../VideoPage/VideoPage/currentVideoSlice.js';

const VideoCardHorizontal = ({ video }) => {
	const navigate = useNavigate();
	const dispatch = useDispatch();

	function handleVideoSelect() {
		dispatch(selectVideo(video.id.videoId));
		navigate(VIDEO);
	}

	return (
		<Row className='mb-3'>
			<Col>
				<Card onClick={handleVideoSelect} className='clickable'>
					<Row className='g-0'>
						<Col xs={6} sm={5} md={4} className='thumb'>
							<Card.Img src={video.snippet.thumbnails.high.url} />
						</Col>
						<Col xs={6} sm={7} md={8}>
							<Card.Body>
								<Card.Title>{video.snippet.title}</Card.Title>
								<Card.Text>{video.snippet.channelTitle}</Card.Text>
								<small>{video.snippet.description}</small>
							</Card.Body>
						</Col>
					</Row>
				</Card>
			</Col>
		</Row>
	);
};

export default VideoCardHorizontal;
