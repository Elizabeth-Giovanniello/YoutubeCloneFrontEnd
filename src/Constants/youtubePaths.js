import { YOUTUBE_API_KEY } from "./apiKeys";

const ROOT = "https://www.googleapis.com/youtube/v3/search";

const apiHeader = "?key=" + YOUTUBE_API_KEY,
typeHeader = "&type=video",
partHeader = "&part=snippet";



function getSearchedVideos(searchTerm){
    return `${ROOT}${apiHeader}${typeHeader}&q=${searchTerm}${partHeader}`
}

function getRelatedVideos(videoID){
    return `${ROOT}?relatedToVideoId=${videoID}${typeHeader}${partHeader}${apiHeader}`
}

export default {
    getSearchedVideos,
    getRelatedVideos,
};
