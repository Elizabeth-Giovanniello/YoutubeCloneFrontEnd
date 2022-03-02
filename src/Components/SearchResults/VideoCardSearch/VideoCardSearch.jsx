import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, Row, Col } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { VIDEO } from '../../../Constants/routes';
import './VideoCardSearch.css';
import { selectVideo } from '../../VideoPage/VideoPage/currentVideoSlice.js';

const SearchVideoCard = ({ video }) => {
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
						<Col sm={6} md={6} lg={4} className='thumb'>
							<Card.Img src={video.snippet.thumbnails.high.url} />
						</Col>
						<Col sm={6} md={6} lg={8}>
							<Card.Body className='p-0 ps-1 pe-1'>
								<div className='svc-title'>{video.snippet.title}</div>
								<div className='svc-channel'>{video.snippet.channelTitle}</div>
								<div className='svc-desc'>{video.snippet.description}</div>
							</Card.Body>
						</Col>
					</Row>
				</Card>
			</Col>
		</Row>
	);
};

export default SearchVideoCard;
