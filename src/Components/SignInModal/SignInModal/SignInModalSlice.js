import { createSlice } from '@reduxjs/toolkit';

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

export const signInModalSlice = createSlice({
	name: 'displaySignInModal',
	initialState: true,
	reducers: {
		show: state => (state = true),
		hide: state => (state = false),
	},
});

export const { show, hide } = signInModalSlice.actions;

export default signInModalSlice.reducer;
