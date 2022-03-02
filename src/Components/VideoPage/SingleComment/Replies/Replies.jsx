import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Collapse } from 'react-bootstrap';
import { allRepliesPath } from '../../../../Constants/apiPaths.js';
import SingleReply from '../../SingleReply/SingleReply.jsx';
import RepliesBtn from '../RepliesBtn/RepliesBtn.jsx';

const Replies = ({ comment }) => {
	const [open, setOpen] = useState(false);
	const [replies, setReplies] = useState([]);

	useEffect(() => {
		fetchReplies();
	}, []);

	const fetchReplies = async () => {
		const res = await axios.get(allRepliesPath(comment.id));
		setReplies(res.data);
	};

	const handleBtn = async () => {
		setOpen(!open);
		if (open) {
		}
	};

	const repliesList = replies.map(reply => <SingleReply reply={reply} />);

	return (
		<>
			{replies.length > 0 && <RepliesBtn open={open} onClick={handleBtn} />}
			<Collapse in={open}>
				<div id='collapse-text'>{repliesList}</div>
			</Collapse>
		</>
	);
};

export default Replies;
