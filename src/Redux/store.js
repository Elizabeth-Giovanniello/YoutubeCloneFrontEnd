import { configureStore } from '@reduxjs/toolkit';
import { user } from './userSlice.js';
import displaySignInModal from '../Components/SignInModal/SignInModal/SignInModalSlice.js';
import { signInForm } from '../Components/SignInModal/SignInForm/SignInFormSlice.js';
import displaySignUpModal from '../Components/SignUpModal/SignUpModalSlice.js';
import { signUpForm } from '../Components/SignUpModal/SignUpForm/SignUpFormSlice.js';
import { search } from '../Components/NavBar/SearchBar/SearchSlice.js';

export const store = configureStore({
	reducer: { displaySignInModal, user, signInForm, displaySignUpModal, signUpForm, search },
});
