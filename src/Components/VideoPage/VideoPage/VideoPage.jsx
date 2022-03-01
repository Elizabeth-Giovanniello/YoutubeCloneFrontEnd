import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import CommentForm from '../CommentForm/CommentForm.jsx';
import TitleBar from '../TitleBar/TitleBar.jsx';
import VideoPlayer from '../VideoPlayer/VideoPlayer';

const VideoPage = props => {
	return (
		<>
			<VideoPlayer fullscreen />
			<Container>
				<Row className='mt-3'>
					<Col xs={8}>
						<TitleBar />
						<CommentForm />
						<div className='m-5 p-5'>EXTENDER</div>
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
