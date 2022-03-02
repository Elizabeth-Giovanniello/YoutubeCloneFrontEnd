import React, { useEffect, useState } from 'react';
import { Card, Collapse, Button } from 'react-bootstrap';
import { CaretDownFill, CaretUpFill } from 'react-bootstrap-icons';
import { ThumbUpOffAlt, ThumbDownOffAlt, ThumbUpAlt, ThumbDownAlt } from '@mui/icons-material';
import SingleReply from '../SingleReply/SingleReply';
import { useSelector } from 'react-redux';
import { toggleLikePath } from '../../../Constants/apiPaths';
import LikeButton from '../LikeButton/LikeButton';
import DislikeButton from '../DislikeButton/DislikeButton';

const SingleComment = ({ comment }) => {
	const user_id = useSelector(state => state.user.user_id);

	const [open, setOpen] = useState(false);

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
				<Button
					variant='basic'
					className='text-primary ps-0'
					onClick={() => setOpen(!open)}
					aria-controls='collapse-text'
					aria-expanded={open}>
					{open ? <CaretUpFill /> : <CaretDownFill />}
					{open ? ' Hide' : ' View'} replies
				</Button>
			</Card.Footer>
			<Card.Footer className='bg-white border-0'>
				<Collapse in={open}>
					<div id='collapse-text'>
						{/* <SingleReply/>
                <SingleReply/>
                <SingleReply/> */}
					</div>
				</Collapse>
			</Card.Footer>
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
