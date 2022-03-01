import { useSelector } from 'react-redux';
import './VideoPlayer.css';
const VideoPlayer = ({ fullscreen }) => {
	// STATE
	const { videoId } = useSelector(state => state.selectedVideo);

	const variant = fullscreen ? 'video-wrapper' : 'video-wrapper-sm';
	return (
		<div className={variant}>
			<iframe
				className='video-player'
				allowFullScreen
				title='title'
				id='ytplayer'
				type='text/html'
				src={`https://www.youtube.com/embed/${videoId}?origin=http://example.com`}
				frameBorder='0'></iframe>
		</div>
	);
};

export default VideoPlayer;
