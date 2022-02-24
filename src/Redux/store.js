import { configureStore } from '@reduxjs/toolkit';
import displaySignInModal from '../Components/SignInModal/SignInModal/SignInModalSlice.js';
import SignInFormSlice from '../Components/SignInModal/SignInForm/SignInFormSlice.js';

export const store = configureStore({ reducer: { displaySignInModal, user: SignInFormSlice } });
