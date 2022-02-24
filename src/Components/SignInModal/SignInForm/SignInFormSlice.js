import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import jwtDecode from 'jwt-decode';
import apiPaths from '../../../Constants/apiPaths.js';

// TYPES
const SIGN_IN = 'user/signIn';

// THUNKS
export const signIn = createAsyncThunk(SIGN_IN, async formData => {
	const response = await axios.post(apiPaths.login, formData);
	window.localStorage.setItem('token', response.data.access);
	const user_id = jwtDecode(response.data.access).user_id;
	return user_id;
});

const signInFormSlice = createSlice({
	name: 'user',
	initialState: { user_id: null },
	reducers: {
		// setUser: (state) => {}
	},
	extraReducers: builder => {
		builder.addCase(signIn.fulfilled, (state, action) => {
			state.user_id = action.payload;
		});
	},
});

// export const { signIn } = signInFormSlice.actions;

export default signInFormSlice.reducer;
