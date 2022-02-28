import { createSlice } from '@reduxjs/toolkit';




export const closeSignUp = () => dispatch => {
	dispatch(hideSignUp());
	dispatch(clearForm());
};

export const signUpModalSlice = createSlice({
	name: 'displaySignUpModal',
	initialState: true,
	reducers: {
		showSignUp: state => (state = true),
		hideSignUp: state => (state = false),
	},
});

export const { showSignIn, hideSignIn } = signUpModalSlice.actions;

export default signUpModalSlice.reducer;