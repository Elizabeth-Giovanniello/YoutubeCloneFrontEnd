import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { youtubeSearchPath } from '../../../Constants/youtubePaths.js';




// THUNK
const HOME = 'home/populate';
export const populateVideos = createAsyncThunk(HOME, async (thunkAPI) => {
    
	try {
		const popular = await axios.get(youtubeSearchPath("popular"));
		const news = await axios.get(youtubeSearchPath("news"));
		const trending = await axios.get(youtubeSearchPath("trending"));
		thunkAPI.dispatch(setTrending(trending.data.items));
		thunkAPI.dispatch(setNews(news.data.items));
		thunkAPI.dispatch(setPopular(popular.data.items));

	} catch (error) {
		console.log(error);
	}
});

const INITAL_STATE = {trending:[], news: [], popular: []};

const homeSlice = createSlice({
	name: 'home',
	initialState: INITAL_STATE,
	reducers: {
		setTrending: (state, action) => {
			state = action.payload;
		},
        setNews: (state, action) => {
            state = action.payload;
        },
		setPopular: (state, action) => {
			state = action.payload;
		},
	},
});

export const { setTrending, setNews, setPopular } = homeSlice.actions;
export const home = homeSlice.reducer;