import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import {
	youtubeRelatedVideosPath,
	youtubeVideoSnippetPath,
} from '../../../Constants/youtubePaths.js';

const GET_SNIPPET = 'selectedVideo/getSnippet';
export const getSnippet = createAsyncThunk(GET_SNIPPET, async (_, thunkAPI) => {
	const videoId = thunkAPI.getState().selectedVideo.videoId;
	const snippet = await axios
		.get(youtubeVideoSnippetPath(videoId))
		.then(res => res.data.items[0].snippet);
	thunkAPI.dispatch(setVideoSnippet(snippet));
});

const GET_RELATED = 'selectedVideo/getRelated';
export const getRelatedVideos = createAsyncThunk(GET_RELATED, async (_, thunkAPI) => {
	const videoId = thunkAPI.getState().selectedVideo.videoId;
	const relatedVideos = await axios
		.get(youtubeRelatedVideosPath(videoId))
		.then(results => results.data.items);

	thunkAPI.dispatch(setRelatedVideos(relatedVideos));
});

const initialState = {
	videoId: 's-LD2RxqWMg',
	title: 'MARRIAGE ATROCITIES TROLL PART 2 - TODAY TRENDING',
	description:
		'INSTAGRAM PAGE : https://www.instagram.com/todaytrendingtroll TWITTER PAGE : https://twitter.com/TodayTrendingTT ...',
	publishedAt: '2022-02-28T12:38:37Z',
	relatedVideos: [],
};

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

		setVideoSnippet: (state, action) => (state = { ...state, ...action.payload }),

		setRelatedVideos: (state, action) => {
			state.relatedVideos = action.payload;
		},
	},
});

export const { setCurrentVideo, setRelatedVideos, setVideoSnippet } = videoSlice.actions;
export const selectedVideo = videoSlice.reducer;
