import { createSlice } from '@reduxjs/toolkit';
import { clearSignUpForm } from './SignUpForm/SignUpFormSlice';



export const closeSignUp = () => dispatch => {
	dispatch(hideSignUp());
	dispatch(clearSignUpForm());
};

export const signUpModalSlice = createSlice({
	name: 'displaySignUpModal',
	initialState: false,
	reducers: {
		showSignUp: state => (state = true),
		hideSignUp: state => (state = false),
	},
});

export const { showSignUp, hideSignUp } = signUpModalSlice.actions;

export default signUpModalSlice.reducer;