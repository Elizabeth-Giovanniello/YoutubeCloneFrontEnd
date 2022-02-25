import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import jwtDecode from 'jwt-decode';
import apiPaths from '../../../Constants/apiPaths.js';
import { closeSignIn, hideSignIn } from '../SignInModal/SignInModalSlice.js';


const signInFormSlice = createSlice({
	name: 'signInForm',
	initialState: { username: "", password: "", error: ""},
	reducers: { setUsername: (state, action) => {state.username = action.payload}, 
	setPassword: (state, action) => {state.password = action.payload},
	setError: (state, action) => {state.error = action.payload},
	clearForm: (state) => {state.password = ""; state.username = ""; state.error = ""}
	}
});



// TYPES
const SIGN_IN = 'user/signIn';

// THUNKS
export const signIn = createAsyncThunk(SIGN_IN, async (formData, thunkAPI) => {
	try{
		const response = await axios.post(apiPaths.login, formData);

		thunkAPI.dispatch(signInFormSlice.actions.setError(""))

		thunkAPI.dispatch(closeSignIn());
	
		window.localStorage.setItem('token', response.data.access);
		const user_id = jwtDecode(response.data.access).user_id;
		return user_id;
	}
	catch{
		thunkAPI.dispatch(signInFormSlice.actions.setError("Username or password is incorrect."))
		window.localStorage.setItem('token', '');
		return null;
	}
	
	
});



const userSlice = createSlice({
	name: 'user',
	initialState: { user_id: null },
	reducers: {
		// setUser: (state) => {}
	},
	extraReducers: builder => {
		builder.addCase(signIn.fulfilled, (state, action) => {
			state.user_id = action.payload;
		});
		builder.addCase(signIn.rejected, (state, action) => {
			state.user_id = null;
			window.localStorage.setItem('token', "");
		})
	},
});

export const { setUsername, setPassword, setError, clearForm } = signInFormSlice.actions;
export const user = userSlice.reducer;
export const signInForm = signInFormSlice.reducer;

