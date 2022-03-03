import React from 'react';
import { Collapse, Container } from 'react-bootstrap';
import SingleReply from '../../SingleReply/SingleReply.jsx';
import RepliesBtn from '../RepliesBtn/RepliesBtn.jsx';

const Replies = ({ replies, open, setOpen }) => {
	const handleBtn = async () => setOpen(!open);

	const repliesList = replies.map((reply, i) => <SingleReply key={i} reply={reply} />);

	return (
		<>
			{replies.length > 0 && <RepliesBtn open={open} onClick={handleBtn} />}
			<Container>
				<Collapse in={open}>
					<div id='collapse-text'>{repliesList}</div>
				</Collapse>
			</Container>
		</>
	);
};

export default Replies;
