import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import {
	youtubeRelatedVideosPath,
	youtubeVideoSnippetPath,
} from '../../../Constants/youtubePaths.js';

const GET_SNIPPET = 'selectedVideo/getSnippet';
export const getSnippet = createAsyncThunk(GET_SNIPPET, async (_, thunkAPI) => {
	const videoId = thunkAPI.getState().selectedVideo.videoId;

	const data = await axios.get(youtubeVideoSnippetPath(videoId)).then(res => {
		const dataObj = res.data.items[0];
		return { ...dataObj.snippet, ...dataObj.statistics };
	});
	thunkAPI.dispatch(setVideoSnippet(data));
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
	videoId: '',
	title: '',
	description: '',
	publishedAt: '',
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
			localStorage.setItem('videoId', videoId);
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
