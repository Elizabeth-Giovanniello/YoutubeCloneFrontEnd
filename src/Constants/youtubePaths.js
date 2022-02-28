import { YOUTUBE_API_KEY } from './apiKeys';
import { MAX_RESULTS } from './constants.js';

const ROOT = 'https://www.googleapis.com/youtube/v3/search';

const apiHeader = '?key=' + YOUTUBE_API_KEY,
	typeHeader = '&type=video',
	partHeader = '&part=snippet',
	maxResults = '&maxResults=';

export const youtubeSearchPath = searchTerm =>
	`${ROOT}${apiHeader}${typeHeader}&q=${searchTerm}${partHeader}${maxResults}${MAX_RESULTS}`;

function getRelatedVideos(videoID) {
	return `${ROOT}${apiHeader}&relatedToVideoId=${videoID}${typeHeader}${partHeader}`;
}
