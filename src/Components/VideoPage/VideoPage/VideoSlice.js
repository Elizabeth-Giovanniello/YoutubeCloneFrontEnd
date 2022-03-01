import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	current: 'M7lc1UVf-VE',
};

export const videoSlice = createSlice({
	name: 'video',
	initialState,
	reducers: {
		setCurrentVideo: (state, action) => {
			state.current = action.payload;
		},
	},
});

export const { setCurrentVideo } = videoSlice.actions;
export const video = videoSlice.reducer;
