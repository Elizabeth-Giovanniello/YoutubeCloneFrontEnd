import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { youtubeRelatedVideosPath } from '../../../Constants/youtubePaths.js';

const initialState = {
	videoId: 's-LD2RxqWMg',
	title: 'MARRIAGE ATROCITIES TROLL PART 2 - TODAY TRENDING',
	description:
		'INSTAGRAM PAGE : https://www.instagram.com/todaytrendingtroll TWITTER PAGE : https://twitter.com/TodayTrendingTT ...',
	publishedAt: '2022-02-28T12:38:37Z',
	relatedVideos: [],
};

const GET_RELATED = 'selectedVideo/getRelated';
export const getRelatedVideos = createAsyncThunk(GET_RELATED, async (_, thunkAPI) => {
	const videoId = thunkAPI.getState().selectedVideo.videoId;
	const relatedVideos = await axios
		.get(youtubeRelatedVideosPath(videoId))
		.then(results => results.data.items);

	console.log(relatedVideos);

	thunkAPI.dispatch(setRelatedVideos(relatedVideos));
});

export const videoSlice = createSlice({
	name: 'video',
	initialState,
	reducers: {
		setCurrentVideo: (state, action) => {
			const { id, snippet } = action.payload;
			const { videoId } = id;
			const { title, description, publishedAt } = snippet;

			return (state = { ...state, videoId, title, description, publishedAt });
		},

		setRelatedVideos: (state, action) => {
			state.relatedVideos = action.payload;
		},
	},
});

export const { setCurrentVideo, setRelatedVideos } = videoSlice.actions;
export const selectedVideo = videoSlice.reducer;
