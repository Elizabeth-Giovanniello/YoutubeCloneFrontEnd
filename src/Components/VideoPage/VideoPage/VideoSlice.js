import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	videoId: 'M7lc1UVf-VE',
	title: '',
	description: '',
	publishedAt: '',
};

export const videoSlice = createSlice({
	name: 'video',
	initialState,
	reducers: {
		setCurrentVideo: (state, action) => (state = action.payload),
	},
});

export const { setCurrentVideo } = videoSlice.actions;
export const selectedVideo = videoSlice.reducer;
