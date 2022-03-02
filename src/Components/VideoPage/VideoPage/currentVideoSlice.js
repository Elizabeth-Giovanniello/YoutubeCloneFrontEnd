import { createSlice } from '@reduxjs/toolkit';

const initialState = '';
export const currentVideoSlice = createSlice({
	name: 'videoId',
	initialState,
	reducers: {
		selectVideo: (state, action) => {
			localStorage.setItem('videoId', action.payload);
			return (state = action.payload);
		},
	},
});

export const { selectVideo } = currentVideoSlice.actions;
export const videoId = currentVideoSlice.reducer;
