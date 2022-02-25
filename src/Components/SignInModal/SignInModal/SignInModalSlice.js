import { createSlice } from '@reduxjs/toolkit';
import { clearForm } from '../SignInForm/SignInFormSlice';

// // TYPES
// const SHOW = 'signInModal/show';
// const HIDE = 'signInModal/hide';

// //REDUCERS
// export function displaySignInModal(state = false, action = {}) {
// 	switch (action.type) {
// 		case SHOW:
// 			return true;
// 		case HIDE:
// 			return false;
// 		default:
// 			return state;
// 	}
// }

// //ACTIONS
// export function showSigninModal() {
// 	return { type: SHOW };
// }

// export function hideSignInModal() {
// 	return { type: HIDE };
// }

export const closeSignIn = () => dispatch => {
	dispatch(hideSignIn());
	dispatch(clearForm());
};

export const signInModalSlice = createSlice({
	name: 'displaySignInModal',
	initialState: false,
	reducers: {
		showSignIn: state => (state = true),
		hideSignIn: state => (state = false),
	},
});

export const { showSignIn, hideSignIn } = signInModalSlice.actions;

export default signInModalSlice.reducer;
