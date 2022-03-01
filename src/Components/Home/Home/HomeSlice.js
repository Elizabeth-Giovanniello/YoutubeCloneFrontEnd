import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { youtubeSearchPath } from '../../../Constants/youtubePaths.js';




// THUNK
const HOME = 'home/populate';
export const populateVideos = createAsyncThunk(HOME, async (_, thunkAPI) => {

	try {
		const popular = await axios.get(youtubeSearchPath("popular")).then((res) => res.data.items);
		const news = await axios.get(youtubeSearchPath("news")).then((res) => res.data.items);
		const trending = await axios.get(youtubeSearchPath("trending")).then((res) => res.data.items);
        thunkAPI.dispatch(setHome({ trending, news, popular }));

	} catch (error) {
		console.log(error);
	}
});

const INITAL_STATE = {trending:[], news: [], popular: []};

const homeSlice = createSlice({
	name: 'home',
	initialState: INITAL_STATE,
	reducers: {
        setHome: (state, action) => state = action.payload,
	},
});

export const { setHome } = homeSlice.actions;
export const home = homeSlice.reducer;