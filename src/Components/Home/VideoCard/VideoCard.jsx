import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, Col } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { VIDEO } from '../../../Constants/routes';
import './VideoCard.css';
import { selectVideo } from '../../VideoPage/VideoPage/currentVideoSlice.js';
import { truncate } from '../../../Helpers/typography.js';

const VideoCard = ({ video }) => {
	const { title, channelTitle, thumbnails } = video.snippet;
	const navigate = useNavigate();
	const dispatch = useDispatch();

	function handleVideoSelect() {
		dispatch(selectVideo(video.id.videoId));
		navigate(VIDEO);
	}

	return (
		<Col xs={12} sm={6} md={4} lg={4} xl={3} className='mb-3'>
			<Card onClick={handleVideoSelect} className='clickable'>
				<div className='thumb'>
					<Card.Img variant='top' src={thumbnails.high.url} />
				</div>
				<Card.Body>
					<div className='hvc-title'>{truncate(title, 50)}</div>
					<div className='hvc-channel'>{channelTitle}</div>
				</Card.Body>
			</Card>
		</Col>
	);
};

export default VideoCard;
