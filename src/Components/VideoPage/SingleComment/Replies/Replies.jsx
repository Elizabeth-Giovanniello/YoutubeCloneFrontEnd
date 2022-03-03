import React from 'react';
import { Collapse } from 'react-bootstrap';
import SingleReply from '../../SingleReply/SingleReply.jsx';
import RepliesBtn from '../RepliesBtn/RepliesBtn.jsx';

const Replies = ({ replies, open, setOpen }) => {
	const handleBtn = async () => setOpen(!open);

	const repliesList = replies.map((reply, i) => <SingleReply key={i} reply={reply} />);

	return (
		<>
			<RepliesBtn open={open} onClick={handleBtn} />
			<Collapse in={open}>
				<div id='collapse-text'>{repliesList}</div>
			</Collapse>
		</>
	);
};

export default Replies;
