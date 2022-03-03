import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { truncate } from '../../../Helpers/typography.js';

const TitleBar = props => {
	const { title, description, publishedAt, viewCount } = useSelector(state => state.videoData);
	const [showDesc, setShowDesc] = useState(false);

	const handleDesc = () => {
		setShowDesc(!showDesc);
	};

	const views = parseInt(viewCount).toLocaleString();
	const date = new Date(publishedAt).toDateString();

	return (
		<>
			<div className='border-bottom'>
				<h5>{title}</h5>
				<p>
					{views} • {date}
				</p>
			</div>
			<div className='border-bottom pt-3'>
				<p>{showDesc ? description : truncate(description, 150)}</p>
				<span onClick={handleDesc} className='clickable text-primary'>
					{showDesc ? 'SHOW LESS' : 'SHOW MORE'}
				</span>
			</div>
		</>
	);
};

export default TitleBar;
