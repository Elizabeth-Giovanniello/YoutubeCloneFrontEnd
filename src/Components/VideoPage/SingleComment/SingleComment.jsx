import React, { useEffect, useState } from 'react';
import { Card, Collapse, Button } from 'react-bootstrap';
import { CaretDownFill, CaretUpFill } from 'react-bootstrap-icons';
import { ThumbUpOffAlt, ThumbDownOffAlt, ThumbUpAlt, ThumbDownAlt } from '@mui/icons-material';
import SingleReply from '../SingleReply/SingleReply';
import { useSelector } from 'react-redux';
import { toggleLikePath } from '../../../Constants/apiPaths';

const SingleComment = props => {
	const user_id = useSelector(state => state.user.user_id);

	const [open, setOpen] = useState(false);


	return (
		<Card className='border-0'>
			<Card.Header className='bg-white border-0'>
				<strong>{props.comment.user.username} </strong>
				<small className='text-muted'>{props.comment.timestamp}</small>
			</Card.Header>
			<Card.Body className='pb-1 pt-0'>
				<Card.Text>{props.comment.body}</Card.Text>
			</Card.Body>
			<Card.Footer className='bg-white border-0'>
				<Button variant='basic' onClick={() => props.toggleLike("comments", props.comment.id)}>
					{props.comment.likes.includes(user_id) ? <ThumbUpAlt fontSize='small' /> : <ThumbUpOffAlt fontSize='small' />}
				</Button>
				<small className='text-muted'> {props.comment.likes.length} </small>
				<Button variant='basic' onClick={() => props.toggleDislike("comments", props.comment.id)}>
					{props.comment.dislikes.includes(user_id) ? (
						<ThumbDownAlt fontSize='small' />
					) : (
						<ThumbDownOffAlt fontSize='small' />
					)}
				</Button>
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
