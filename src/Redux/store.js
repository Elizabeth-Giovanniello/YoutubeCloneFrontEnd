import { configureStore } from '@reduxjs/toolkit';
import { user } from './userSlice.js';
import displaySignInModal from '../Components/SignInModal/SignInModal/SignInModalSlice.js';
import { signInForm } from '../Components/SignInModal/SignInForm/SignInFormSlice.js';
import displaySignUpModal from '../Components/SignUpModal/SignUpModalSlice.js';
import { signUpForm } from '../Components/SignUpModal/SignUpForm/SignUpFormSlice.js';
import { search } from '../Components/NavBar/SearchBar/SearchSlice.js';
import { videoData } from '../Components/VideoPage/VideoPage/VideoSlice.js';
import { home } from '../Components/Home/Home/HomeSlice.js';
import { videoId } from '../Components/VideoPage/VideoPage/currentVideoSlice.js';
import { relatedVideos } from '../Components/VideoPage/RelatedVideos/relatedVideosSlice.js';
import { comments } from '../Components/VideoPage/Comments/CommentsSlice.js';

export const store = configureStore({
	reducer: {
		videoId,
		videoData,
		relatedVideos,
		comments,
		home,
		displaySignInModal,
		user,
		signInForm,
		displaySignUpModal,
		signUpForm,
		search,
	},
});
