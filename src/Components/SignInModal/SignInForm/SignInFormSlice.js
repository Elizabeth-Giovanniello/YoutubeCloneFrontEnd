import { createSlice } from '@reduxjs/toolkit';

const signInFormSlice = createSlice({
	name: 'signInForm',
	initialState: { username: '', password: '', error: '' },
	reducers: {
		setUsername: (state, action) => {
			state.username = action.payload;
		},
		setPassword: (state, action) => {
			state.password = action.payload;
		},
		setError: (state, action) => {
			state.error = action.payload;
		},
		clearSignInForm: state => {
			state.password = '';
			state.username = '';
			state.error = '';
		},
	},
});

export const { setUsername, setPassword, setError, clearSignInForm } = signInFormSlice.actions;
export const signInForm = signInFormSlice.reducer;
