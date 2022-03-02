import { createSlice } from '@reduxjs/toolkit';

const INITIAL_STATE = {
	first_name: '-',
	last_name: '-',
	username: '',
	password: '',
	confirmPassword: '',
	email: '',
	error: '',
	pwError: '',
};

const signUpFormSlice = createSlice({
	name: 'signInForm',
	initialState: INITIAL_STATE,
	reducers: {
		setForm: (state, action) => (state = { ...state, ...action.payload }),
		setSignUpError: (state, action) => {
			state.error = action.payload;
		},
		clearSignUpForm: state => (state = INITIAL_STATE),
	},
});

export const { setForm, setSignUpError, clearSignUpForm } = signUpFormSlice.actions;
export const signUpForm = signUpFormSlice.reducer;
