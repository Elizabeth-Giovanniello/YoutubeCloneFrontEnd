import { configureStore } from '@reduxjs/toolkit';
import displaySignInModal from '../Components/SignInModal/SignInModal/signInSlice.js';

export const store = configureStore({ reducer: { displaySignInModal } });
