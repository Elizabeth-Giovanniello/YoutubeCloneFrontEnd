import React, { useState } from 'react';
import { Card } from 'react-bootstrap';
import { parseDateTime } from '../../../Helpers/commentsReplies.js';
import LikeButton from '../LikeButton/LikeButton.jsx';
import DislikeButton from '../DislikeButton/DislikeButton.jsx';
import { useSelector } from 'react-redux';
import { editReplyPath } from '../../../Constants/apiPaths.js';
import OptionsMenu from '../../Common/OptionsMenu/OptionsMenu.jsx';
import EditResponse from '../../Common/EditResponse/EditResponse.jsx';

const SingleReply = ({ reply }) => {
	const user_id = useSelector(state => state.user.user_id);
	const ts = parseDateTime(reply.timestamp);

	const [showEditForm, setShowEditForm] = useState(false);

	return showEditForm ? (
		<EditResponse response={reply} pathFunc={editReplyPath} setShowEditForm={setShowEditForm} />
	) : (
		<Card className='border-0 mt-2'>
			<Card.Header className='bg-white border-0 p-0'>
				<strong className='response-title'>{reply.user.username} </strong>
				<small className='text-muted response-ts'>{ts}</small>
			</Card.Header>
			<Card.Body className='p-0'>
				<div className='d-flex justify-content-between'>
					<div>{reply.body}</div>
					{user_id === reply.user.id && (
						<OptionsMenu
							pathFunc={editReplyPath}
							type={'reply'}
							response={reply}
							setShowEditForm={setShowEditForm}
						/>
					)}
				</div>
			</Card.Body>
			<Card.Footer className='bg-white border-0 p-0'>
				<LikeButton type='replies' response={reply} />
				<DislikeButton type='replies' response={reply} />
			</Card.Footer>
		</Card>
	);
};

export default SingleReply;
