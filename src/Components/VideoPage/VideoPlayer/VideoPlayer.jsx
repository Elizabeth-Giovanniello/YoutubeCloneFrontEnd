import './VideoPlayer.css';
const VideoPlayer = ({ fullscreen }) => {
	const variant = fullscreen ? 'video-wrapper' : 'video-wrapper-sm';
	return (
		<div className={variant}>
			<iframe
				className='video-player'
				allowFullScreen
				title='title'
				id='ytplayer'
				type='text/html'
				src='https://www.youtube.com/embed/M7lc1UVf-VE?origin=http://example.com'
				frameborder='0'></iframe>
		</div>
	);
};

export default VideoPlayer;
