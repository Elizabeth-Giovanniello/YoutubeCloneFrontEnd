import axios from 'axios';
import jwtDecode from 'jwt-decode';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { setError } from '../Components/SignInModal/SignInForm/SignInFormSlice.js';
import { closeSignIn } from '../Components/SignInModal/SignInModal/SignInModalSlice.js';

import apiPaths from '../Constants/apiPaths.js';
import { closeSignUp } from '../Components/SignUpModal/SignUpModalSlice.js';

const setToken = (value = '') => window.localStorage.setItem('token', value);
const DEFAULT_USER_STATE = { user_id: null, token: '' };

// THUNKS
const SIGN_IN = 'user/signIn';
export const signIn = createAsyncThunk(SIGN_IN, async (formData, thunkAPI) => {
	try {
		const response = await axios.post(apiPaths.login, formData);
		const token = response.data.access;
		const user_id = jwtDecode(token).user_id;

		setToken(token);
		thunkAPI.dispatch(setUser({ user_id, token }));
		thunkAPI.dispatch(closeSignIn());
	} catch {
		thunkAPI.dispatch(setError('Username or password is incorrect.'));
		setToken();
		thunkAPI.dispatch(clearUser());
	}
});

const SIGN_UP = 'user/signUp';
export const signUp = createAsyncThunk(SIGN_UP, async (formData, thunkAPI) => {
	try {
		const response = await axios.post(apiPaths.register, formData);
		thunkAPI.dispatch(signIn(formData));
		thunkAPI.dispatch(closeSignUp());
		console.log("User creation: success");
	} catch (error) {
		//TODO: implement error handling
		console.log(error);
	}
})




export const logout = () => dispatch => {
	dispatch(clearUser);
};

const userSlice = createSlice({
	name: 'user',
	initialState: DEFAULT_USER_STATE,
	reducers: {
		setUser: (state, action) => (state = action.payload),
		clearUser: state => {
			setToken();
			return (state = DEFAULT_USER_STATE);
		},
	},
});


export const { setUser, clearUser } = userSlice.actions;
export const user = userSlice.reducer;

