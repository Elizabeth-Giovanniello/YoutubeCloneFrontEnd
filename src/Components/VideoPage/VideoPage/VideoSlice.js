import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import {
	youtubeRelatedVideosPath,
	youtubeVideoSnippetPath,
} from '../../../Constants/youtubePaths.js';

// 1. video "link" is clicked
// 2. state.videoId is updated via selectVideo action
// 3. navigate to video page and mount
// 4. video page useffect dispatches thunk with state.videoId
// 4a. thunk fetches snippet with videoId
// 4b. thunk fetches related videos with videoId
// 4c. thunk fetches all comments with videoId
// 4d. thunk dispatches setVideoData with bundled data object
// 5. setVideoData spreads data object into selectedVideo state

const FETCH = 'videoData/fetch';
export const fetchVideoData = createAsyncThunk(FETCH, async (_, thunkAPI) => {
	const { videoId } = thunkAPI.getState();

	const data = await axios.get(youtubeVideoSnippetPath(videoId)).then(res => {
		const dataObj = res.data.items[0];
		return { ...dataObj.snippet, ...dataObj.statistics };
	});

	thunkAPI.dispatch(setVideoData(data));
});

const initialState = {
	title: '',
	description: '',
	publishedAt: '',
	viewCount: '',
};

export const videoSlice = createSlice({
	name: 'videoData',
	initialState,
	reducers: {
		setVideoData: (state, action) => (state = action.payload),
	},
});

export const { setCurrentVideo, setRelatedVideos, setVideoData } = videoSlice.actions;
export const videoData = videoSlice.reducer;
