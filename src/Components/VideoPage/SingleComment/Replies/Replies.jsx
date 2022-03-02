import React, { useState } from 'react';
import { Collapse } from 'react-bootstrap';
import RepliesBtn from '../RepliesBtn/RepliesBtn.jsx';

const Replies = props => {
	const [open, setOpen] = useState(false);

	return (
		<>
			<RepliesBtn open={open} onClick={setOpen} />
			<Collapse in={open}>
				<div id='collapse-text'>
					<p>1</p>
					<p>1</p>
					<p>1</p>
				</div>
			</Collapse>
		</>
	);
};

export default Replies;
