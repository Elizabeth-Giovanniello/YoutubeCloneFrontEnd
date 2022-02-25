import { configureStore } from '@reduxjs/toolkit';
import displaySignInModal from '../Components/SignInModal/SignInModal/SignInModalSlice.js';
import { user, signInForm } from '../Components/SignInModal/SignInForm/SignInFormSlice.js';

export const store = configureStore({ reducer: { displaySignInModal, user, signInForm } });
