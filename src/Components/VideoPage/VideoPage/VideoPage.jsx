import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import VideoPlayer from '../VideoPlayer/VideoPlayer';

const VideoPage = props => {
	return (
		<>
			<VideoPlayer fullscreen />
			<Container fluid>
				<Row className='mt-3'>
					<Col xs={8}>
						<Row>
							<h4>Video Title</h4>
							<Col></Col>
						</Row>
						<div>
							<p>
								<span># views</span>
								<span>date</span>
							</p>
						</div>
					</Col>
					<Col>
						<div>Video Card</div>
						<div>Video Card</div>
						<div>Video Card</div>
						<div>Video Card</div>
						<div>Video Card</div>
					</Col>
				</Row>
			</Container>
		</>
	);
};

export default VideoPage;
