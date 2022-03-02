import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { ThumbUpOffAlt, ThumbDownOffAlt, ThumbUpAlt, ThumbDownAlt } from '@mui/icons-material';
import { useDispatch, useSelector } from 'react-redux';
import { toggleDislikePath } from '../../../Constants/apiPaths';
import axios from 'axios';
import { AUTH_HEADER } from '../../../Helpers/requests';
import { fetchComments } from '../Comments/CommentsSlice';

const DislikeButton = props => {

	const user_id = useSelector(state => state.user.user_id);
    const dispatch = useDispatch();

	async function toggleDislike() {
		let response = await axios
			.put(toggleDislikePath(props.type, props.response.id), "", AUTH_HEADER)
			.then(response => {
				console.log(response);
                dispatch(fetchComments());
			})
			.catch(error => {
				console.log(error.response);
			});
	}


	return (
        //button checks to see if the user has liked the response, and changes the button fill accordingly
        <Button variant='basic' onClick={() => toggleDislike()}>
            {props.response.dislikes.map(function(like){return like.user}).includes(user_id) ? <ThumbDownAlt fontSize='small' /> : <ThumbDownOffAlt fontSize='small' />}
        </Button>
	);
};

export default DislikeButton;