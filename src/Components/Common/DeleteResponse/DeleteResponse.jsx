import { Button } from '@mui/material';
import axios from 'axios';
import React, { useState } from 'react';
import { Modal } from 'react-bootstrap';
import { TrashFill } from 'react-bootstrap-icons';
import { useDispatch } from 'react-redux';
import { authHeader } from '../../../Helpers/requests';
import { fetchComments } from '../../VideoPage/Comments/CommentsSlice';

const DeleteResponse = props => {
	const [show, setShow] = useState(false);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	const dispatch = useDispatch();

	async function deleteResponse(responseID, pathFunc) {
		let response = await axios
			.delete(pathFunc(responseID), authHeader())
			.then(response => {
				console.log(response);
				dispatch(fetchComments());
				handleClose();
			})
			.catch(error => {
				console.log(error.response);
			});
	}

	return (
		<>
			<p className='ps-4 m-0 pb-2 pt-2' onClick={handleShow}>
				<TrashFill className='me-1' size={18} />
				Delete
			</p>
			<Modal size='xs' centered show={show} onHide={handleClose}>
				<Modal.Header closeButton>
					<Modal.Title>Delete {props.type}</Modal.Title>
				</Modal.Header>
				<Modal.Body>Delete your {props.type} permanently?</Modal.Body>
				<Modal.Footer>
					<Button
						onClick={() => {
							deleteResponse(props.response.id, props.pathFunc);
						}}>
						Delete
					</Button>
					<Button onClick={handleClose}>Cancel</Button>
				</Modal.Footer>
			</Modal>
		</>
	);
};

export default DeleteResponse;
