import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, Row, Col } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { VIDEO } from '../../../../Constants/routes.js';
import { selectVideo } from '../../VideoPage/currentVideoSlice.js';

import './RelatedVideoCard.css';
import { truncate } from '../../../../Helpers/typography.js';

const RelatedVideoCard = ({ video }) => {
	const { title, channelTitle, thumbnails, publishedAt } = video.snippet;

	const date = new Date(publishedAt).toDateString();
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
						<Col xs={6} sm={5} md={6} className='thumb'>
							<Card.Img src={thumbnails.high.url} />
						</Col>
						<Col xs={6} sm={7} md={6}>
							<Card.Body className='p-0 ps-2 pe-2 pt-1'>
								<div className='rvc-title'>{truncate(title, 35)}</div>
								<div className='rvc-name'>{channelTitle}</div>
								<div className='rvc-date'>{date}</div>
							</Card.Body>
						</Col>
					</Row>
				</Card>
			</Col>
		</Row>
	);
};

export default RelatedVideoCard;
