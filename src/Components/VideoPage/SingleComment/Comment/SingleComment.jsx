import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import LikeButton from '../../LikeButton/LikeButton';
import DislikeButton from '../../DislikeButton/DislikeButton';
import Replies from '../Replies/Replies.jsx';
import ReplyBtn from '../ReplyBtn/ReplyBtn.jsx';
import ReplyForm from '../ReplyForm/ReplyForm.jsx';
import { parseDateTime } from '../../../../Helpers/commentsReplies.js';
import { allRepliesPath, editCommentPath } from '../../../../Constants/apiPaths.js';
import axios from 'axios';
import SingleReply from '../../SingleReply/SingleReply.jsx';
import OptionsMenu from '../../../Common/OptionsMenu/OptionsMenu';

const SingleComment = ({ comment }) => {
	const user_id = useSelector(state => state.user.user_id);
	const { comments } = useSelector(state => state);

	// LOCAL STATE
	const [showReplyForm, setShowReplyForm] = useState(false);
	const [replies, setReplies] = useState([]);
	const [newReply, setNewReply] = useState(null);

	useEffect(() => {
		fetchReplies();
	}, [comments]);

	const fetchReplies = async () => {
		const res = await axios.get(allRepliesPath(comment.id));
		setReplies(res.data);
	};

	const handleReplyForm = () => {
		setShowReplyForm(!showReplyForm);
	};

	const ts = parseDateTime(comment.timestamp);

	const singleReply = newReply !== null && !showReplyForm && replies.length !== 1 && (
		<SingleReply reply={newReply} />
	);

	return (
		<Card className='border-0'>
			<Card.Header className='bg-white border-0'>
				<strong>{comment.user.username} </strong>
				<small className='text-muted'>{ts}</small>
			</Card.Header>
			<Card.Body className='pb-1 pt-0'>
				<Card.Text>{comment.body}</Card.Text>
				{user_id === comment.user.id && <OptionsMenu pathFunc={editCommentPath} type={'comment'} response={comment} />}
			</Card.Body>
			<Card.Footer className='bg-white border-0'>
				<LikeButton type='comments' response={comment} />
				<DislikeButton type='comments' response={comment} />
				<ReplyBtn onClick={handleReplyForm} />
				{showReplyForm && (
					<ReplyForm comment={comment} onCancel={handleReplyForm} setNewReply={setNewReply} />
				)}
			</Card.Footer>
			<Card.Footer className='bg-white border-0 pt-0'>
				<Replies replies={replies} />
				{singleReply}
			</Card.Footer>
		</Card>
	);
};

export default SingleComment;
