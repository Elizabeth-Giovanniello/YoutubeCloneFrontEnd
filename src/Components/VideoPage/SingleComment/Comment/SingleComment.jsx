import React from 'react';
import { Card } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import LikeButton from '../../LikeButton/LikeButton';
import DislikeButton from '../../DislikeButton/DislikeButton';
import Replies from '../Replies/Replies.jsx';

const SingleComment = ({ comment }) => {
	const user_id = useSelector(state => state.user.user_id);

	const ts = parseDateTime(comment.timestamp);

	return (
		<Card className='border-0'>
			<Card.Header className='bg-white border-0'>
				<strong>{comment.user.username} </strong>
				<small className='text-muted'>{ts}</small>
			</Card.Header>
			<Card.Body className='pb-1 pt-0'>
				<Card.Text>{comment.body}</Card.Text>
			</Card.Body>
			<Card.Footer className='bg-white border-0'>
				<LikeButton type='comments' response={comment} />
				<small className='text-muted'> {comment.likes.length} </small>
				<DislikeButton type='comments' response={comment} />
				<small className='text-muted'> REPLY</small>
			</Card.Footer>
			<Card.Footer className='bg-white border-0 pt-0'>
				<Replies />
			</Card.Footer>
			<Card.Footer className='bg-white border-0'></Card.Footer>
		</Card>
	);
};

export default SingleComment;

function parseDateTime(timestamp) {
	const dateTime = new Date(timestamp);
	const date = dateTime.toLocaleDateString();
	const time = dateTime.toLocaleTimeString();
	return `${date} ${time}`;
}
