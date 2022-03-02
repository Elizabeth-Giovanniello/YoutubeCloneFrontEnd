import React, { useState } from 'react';
import { Collapse } from 'react-bootstrap';
import SingleReply from '../../SingleReply/SingleReply.jsx';
import RepliesBtn from '../RepliesBtn/RepliesBtn.jsx';

const Replies = ({ replies }) => {
	const [open, setOpen] = useState(false);

	const handleBtn = async () => setOpen(!open);

	const repliesList = replies.map((reply, i) => <SingleReply key={i} reply={reply} />);

	const singleReply = replies.length === 1 && repliesList[0];

	return (
		<>
			{replies.length > 1 && <RepliesBtn open={open} onClick={handleBtn} />}
			<Collapse in={open}>
				<div id='collapse-text'>{repliesList}</div>
			</Collapse>
			{singleReply}
		</>
	);
};

export default Replies;
