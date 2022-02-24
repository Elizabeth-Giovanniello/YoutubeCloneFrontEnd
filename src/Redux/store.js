import { configureStore } from '@reduxjs/toolkit';
import displaySignInModal from '../Components/SignInModal/SignInModal/SignInModalSlice.js';

export const store = configureStore({ reducer: { displaySignInModal } });
