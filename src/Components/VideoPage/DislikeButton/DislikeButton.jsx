import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { ThumbUpOffAlt, ThumbDownOffAlt, ThumbUpAlt, ThumbDownAlt } from '@mui/icons-material';
import { useSelector } from 'react-redux';
import { toggleDislikePath } from '../../../Constants/apiPaths';
import axios from 'axios';
import { AUTH_HEADER } from '../../../Helpers/requests';

const DislikeButton = props => {
	const user_id = useSelector(state => state.user.user_id);

	async function toggleDislike() {
		let response = await axios
			.put(toggleDislikePath(props.type, props.response.id), AUTH_HEADER)
			.then(response => {
				console.log(response);
			})
			.catch(error => {
				console.log(error.response);
			});
	}


	return (

        <Button variant='basic' onClick={() => toggleDislike()}>
            {props.response.dislikes.includes(user_id) ? <ThumbDownAlt fontSize='small' /> : <ThumbDownOffAlt fontSize='small' />}
        </Button>
	);
};

export default DislikeButton;