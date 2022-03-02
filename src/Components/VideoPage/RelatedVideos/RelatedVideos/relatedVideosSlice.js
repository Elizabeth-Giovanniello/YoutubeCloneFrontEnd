import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { youtubeRelatedVideosPath } from '../../../../Constants/youtubePaths.js';

const FETCH = 'relatedVideos/fetch';
export const fetchRelatedVideos = createAsyncThunk(FETCH, async (_, thunkAPI) => {
	const { videoId } = thunkAPI.getState();

	const relatedVideos = await axios
		.get(youtubeRelatedVideosPath(videoId))
		.then(results => results.data.items);

	thunkAPI.dispatch(setRelatedVideos(relatedVideos));
});

const initialState = [];
export const relatedVideosSlice = createSlice({
	name: 'relatedVideos',
	initialState,
	reducers: {
		setRelatedVideos: (state, action) => (state = action.payload),
	},
});

export const { setRelatedVideos } = relatedVideosSlice.actions;
export const relatedVideos = relatedVideosSlice.reducer;
