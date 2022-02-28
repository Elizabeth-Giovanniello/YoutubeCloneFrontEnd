import { createSlice } from '@reduxjs/toolkit';

const INITIAL_STATE = { first_name: '', last_name: '', username: '', password: '', confirmPassword: '', email: '', error: ''}

const signUpFormSlice = createSlice({
	name: 'signInForm',
	initialState: INITIAL_STATE,
	reducers: {
        setForm: (state, action) => {
            state = {...state, ...action.payload}
        },
		clearSignUpForm: state => {
			state = INITIAL_STATE
		},
	},
});

export const { setForm, clearSignUpForm } = signUpFormSlice.actions;
export const signUpForm = signUpFormSlice.reducer;