import { Button } from '@mui/material';
import React from 'react';
import { Modal } from 'react-bootstrap';

const UserModal = ({ title, titleBtn, form, submitBtn, show, hide }) => {
	const showTitleBtn = titleBtn ? <span>or{titleBtn}</span> : <></>;

	return (
		<Modal show={show} centered onHide={hide}>
			<Modal.Header className='d-flex justify-content-between'>
				<Modal.Title className='d-inline'>{title} </Modal.Title>
				{showTitleBtn}
			</Modal.Header>
			<Modal.Body>{form}</Modal.Body>
			<Modal.Footer>
				<Button onClick={hide} variant='text' color='error'>
					Cancel
				</Button>
				{submitBtn}
			</Modal.Footer>
		</Modal>
	);
};

export default UserModal;
