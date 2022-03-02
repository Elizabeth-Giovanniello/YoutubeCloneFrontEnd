import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, Col } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { VIDEO } from '../../../Constants/routes';
import './VideoCard.css';
import { selectVideo } from '../../VideoPage/VideoPage/currentVideoSlice.js';

const VideoCard = ({ video }) => {
	const navigate = useNavigate();
	const dispatch = useDispatch();

	function handleVideoSelect() {
		dispatch(selectVideo(video.id.videoId));
		navigate(VIDEO);
	}

	return (
		<Col xs={12} sm={5} md={4} lg={4} xl={3}>
			<Card onClick={handleVideoSelect} className='clickable'>
				<div className='thumb'>
					<Card.Img variant='top' src={video.snippet.thumbnails.high.url} />
				</div>
				<Card.Body>
					<Card.Title>{video.snippet.title}</Card.Title>
					<Card.Text>
						<small>{video.snippet.channelTitle}</small>
					</Card.Text>
				</Card.Body>
			</Card>
		</Col>
	);
};

export default VideoCard;
