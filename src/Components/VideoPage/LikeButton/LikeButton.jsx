import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { ThumbUpOffAlt, ThumbDownOffAlt, ThumbUpAlt, ThumbDownAlt } from '@mui/icons-material';
import { useSelector } from 'react-redux';
import { toggleLikePath } from '../../../Constants/apiPaths';
import { AUTH_HEADER } from '../../../Helpers/requests';
import axios from 'axios';

const LikeButton = props => {
	const user_id = useSelector(state => state.user.user_id);

	async function toggleLike() {

		let response = await axios
			.put(toggleLikePath(props.type, props.response.id), AUTH_HEADER)
			.then(response => {
				console.log(response);
			})
			.catch(error => {
				console.log(error.response);
			});
	}


	return (

        <Button variant='basic' onClick={() => toggleLike()}>
            {props.response.likes.includes(user_id) ? <ThumbUpAlt fontSize='small' /> : <ThumbUpOffAlt fontSize='small' />}
        </Button>
	);
};

export default LikeButton;