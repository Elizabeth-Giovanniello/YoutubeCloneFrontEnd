import axios from 'axios';
import jwtDecode from 'jwt-decode';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { setError } from '../Components/SignInModal/SignInForm/SignInFormSlice.js';
import { closeSignIn } from '../Components/SignInModal/SignInModal/SignInModalSlice.js';

import apiPaths from '../Constants/apiPaths.js';

const DEFAULT_USER_STATE = { user_id: null, token: '' };

// THUNKS
const SIGN_IN = 'user/signIn';
export const signIn = createAsyncThunk(SIGN_IN, async (formData, thunkAPI) => {
	try {
		const response = await axios.post(apiPaths.login, formData);
		const token = response.data.access;
		const user_id = jwtDecode(token).user_id;

		window.localStorage.setItem('token', token);
		thunkAPI.dispatch(setUser({ user_id, token }));
		thunkAPI.dispatch(closeSignIn());
	} catch {
		thunkAPI.dispatch(setError('Username or password is incorrect.'));
		window.localStorage.setItem('token', '');
		thunkAPI.dispatch(setUser(DEFAULT_USER_STATE));
	}
});

const userSlice = createSlice({
	name: 'user',
	initialState: DEFAULT_USER_STATE,
	reducers: {
		setUser: (state, action) => (state = action.payload),
	},
});

export const { setUser, setToken } = userSlice.actions;
export const user = userSlice.reducer;
