import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	id: 'M7lc1UVf-VE',
};

export const videoSlice = createSlice({
	name: 'video',
	initialState,
	reducers: {
		setCurrentVideo: (state, action) => {
			state.id = action.payload;
		},
	},
});

export const { setCurrentVideo } = videoSlice.actions;
export const selectedVideo = videoSlice.reducer;
