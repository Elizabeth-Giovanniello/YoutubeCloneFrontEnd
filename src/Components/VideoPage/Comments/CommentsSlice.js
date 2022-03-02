import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { allCommentsPath } from '../../../Constants/apiPaths.js';

const FETCH = 'comments/fetch';
export const fetchComments = createAsyncThunk(FETCH, async (_, thunkAPI) => {
	const { videoId } = thunkAPI.getState();
	const comments = await axios.get(allCommentsPath(videoId));
	thunkAPI.dispatch(setComments(comments.data));
});

const initialState = [];
export const commentsSlice = createSlice({
	name: 'comments',
	initialState,
	reducers: {
		setComments: (state, action) => (state = action.payload),
	},
});

export const { setComments } = commentsSlice.actions;
export const comments = commentsSlice.reducer;
