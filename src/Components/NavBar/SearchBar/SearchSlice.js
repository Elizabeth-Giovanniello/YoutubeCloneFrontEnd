import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { youtubeSearchPath } from '../../../Constants/youtubePaths.js';

// THUNK
const SEARCH = 'searchBar/search';
export const executeSearch = createAsyncThunk(SEARCH, async (searchTerm, thunkAPI) => {
	try {
		const response = await axios.get(youtubeSearchPath(searchTerm));
		thunkAPI.dispatch(setSearchResults(response.data.items));
	} catch (error) {
		console.log(error);
	}
});

const INITAL_STATE = { term: '', results: [] };

const searchSlice = createSlice({
	name: 'search',
	initialState: INITAL_STATE,
	reducers: {
		setSearchTerm: (state, action) => {
			state.term = action.payload;
		},
		setSearchResults: (state, action) => {
			state.results = action.payload;
		},
	},
});

export const { setSearchTerm, setSearchResults } = searchSlice.actions;
export const search = searchSlice.reducer;
