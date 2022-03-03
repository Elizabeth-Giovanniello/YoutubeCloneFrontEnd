import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import { useSelector } from 'react-redux';
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
import EditResponse from '../../../Common/EditResponse/EditResponse';
import './Comment.css';

const SingleComment = ({ comment }) => {
	const user_id = useSelector(state => state.user.user_id);
	const { comments } = useSelector(state => state);

	// LOCAL STATE
	const [showReplyForm, setShowReplyForm] = useState(false);
	const [replies, setReplies] = useState([]);
	const [newReply, setNewReply] = useState(null);
	const [showEditForm, setShowEditForm] = useState(false);
	const [repliesOpen, setRepliesOpen] = useState(false);
	const [isHighlighted, setIsHighlighted] = useState(false);

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

	const singleReply = newReply !== null &&
		!showReplyForm &&
		replies.length !== 1 &&
		!repliesOpen && <SingleReply reply={newReply} />;

	return showEditForm ? (
		<EditResponse response={comment} pathFunc={editCommentPath} setShowEditForm={setShowEditForm} />
	) : (
		<Card className='border-0 mb-2' onMouseEnter={() => setIsHighlighted(true)}
		onMouseLeave={() => setIsHighlighted(false)}>
			<Card.Header className='bg-white border-0 p-0'>
				<strong className='response-title'>{comment.user.username} </strong>
				<small className='text-muted response-ts'>{ts}</small>
			</Card.Header>
			<Card.Body className='p-0'>
				<div className='d-flex justify-content-between'>
					<div>{comment.body}</div>
					{user_id === comment.user.id && isHighlighted && (
						<OptionsMenu
							pathFunc={editCommentPath}
							type={'comment'}
							response={comment}
							setShowEditForm={setShowEditForm}
						/>
					)}
				</div>
			</Card.Body>
			<Card.Footer className='bg-white border-0 p-0'>
				<LikeButton type='comments' response={comment} />
				<DislikeButton type='comments' response={comment} />
				<ReplyBtn onClick={handleReplyForm} />
				{showReplyForm && (
					<ReplyForm comment={comment} onCancel={handleReplyForm} setNewReply={setNewReply} />
				)}
			</Card.Footer>
			<Card.Footer className='bg-white border-0 p-0'>
				<Replies open={repliesOpen} setOpen={setRepliesOpen} replies={replies} />
				{singleReply}
			</Card.Footer>
		</Card>
	);
};

export default SingleComment;
