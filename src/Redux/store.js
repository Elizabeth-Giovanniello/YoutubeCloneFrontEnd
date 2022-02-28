import { configureStore } from '@reduxjs/toolkit';
import displaySignInModal from '../Components/SignInModal/SignInModal/SignInModalSlice.js';
import { signInForm } from '../Components/SignInModal/SignInForm/SignInFormSlice.js';
import { user } from './userSlice.js';
import { signUpForm } from '../Components/SignUpModal/SignUpForm/SignUpFormSlice.js';

export const store = configureStore({ reducer: { displaySignInModal, user, signInForm, signUpForm } });
