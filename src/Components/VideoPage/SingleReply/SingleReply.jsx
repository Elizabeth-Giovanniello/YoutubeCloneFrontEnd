import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import { ThumbUpOffAlt, ThumbDownOffAlt, ThumbUpAlt, ThumbDownAlt } from '@mui/icons-material';
import { parseDateTime } from '../../../Helpers/commentsReplies.js';
import LikeButton from '../LikeButton/LikeButton.jsx';
import DislikeButton from '../DislikeButton/DislikeButton.jsx';

const SingleReply = ({ reply }) => {
	const ts = parseDateTime(reply.timestamp);

	return (
		<Card className='border-0'>
			<Card.Header className='bg-white border-0'>
				<strong>{reply.user.username} </strong>
				<small className='text-muted'>{ts}</small>
			</Card.Header>
			<Card.Body className='pb-1 pt-0'>
				<Card.Text>{reply.body}</Card.Text>
			</Card.Body>
			<Card.Footer className='bg-white border-0'>
				<LikeButton type='replies' response={reply} />
				<DislikeButton type='replies' response={reply} />
			</Card.Footer>
		</Card>
	);
};

export default SingleReply;
