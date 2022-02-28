import './VideoPlayer.css';
const VideoPlayer = props => {
	return (
		<div className='video-wrapper'>
			<iframe
				allowFullScreen
				title='title'
				id='ytplayer'
				type='text/html'
				width='640'
				height='360'
				src='https://www.youtube.com/embed/M7lc1UVf-VE?origin=http://example.com'
				frameborder='0'></iframe>
		</div>
	);
};

export default VideoPlayer;
