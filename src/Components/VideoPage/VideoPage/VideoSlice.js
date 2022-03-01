import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	videoId: 's-LD2RxqWMg',
	title: 'MARRIAGE ATROCITIES TROLL PART 2 - TODAY TRENDING',
	description:
		'INSTAGRAM PAGE : https://www.instagram.com/todaytrendingtroll TWITTER PAGE : https://twitter.com/TodayTrendingTT ...',
	publishedAt: '2022-02-28T12:38:37Z',
};

export const videoSlice = createSlice({
	name: 'video',
	initialState,
	reducers: {
		setCurrentVideo: (state, action) => {
			const { id, snippet } = action.payload;
			const { videoId } = id;
			const { title, description, publishedAt } = snippet;

			return (state = { videoId, title, description, publishedAt });
		},
	},
});

export const { setCurrentVideo } = videoSlice.actions;
export const selectedVideo = videoSlice.reducer;
