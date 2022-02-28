import { createSlice } from '@reduxjs/toolkit';

const INITAL_STATE = { searchTerm: '', searchResults: [] };

const searchSlice = createSlice({
	name: 'search',
	initialState: INITAL_STATE,
	reducers: {
		setSearchTerm: (state, action) => {
			state.searchTerm = action.payload;
		},
	},
});

export const { setSearchTerm } = searchSlice.actions;
export const search = searchSlice.reducer;
