import React from 'react';
import { useSelector } from 'react-redux';

const TitleBar = props => {
	const { title, description, publishedAt, viewCount } = useSelector(state => state.videoData);

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
				<p>{description}</p>
			</div>
		</>
	);
};

export default TitleBar;
