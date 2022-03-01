import NavBar from './Components/NavBar/NavBar/NavBar.jsx';
import './App.css';
import SignInModal from './Components/SignInModal/SignInModal/SignInModal.jsx';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setUser } from './Redux/userSlice.js';
import jwtDecode from 'jwt-decode';
import SignUpModal from './Components/SignUpModal/SignUpModal.jsx';
import { Routes, Route } from 'react-router-dom';
import Home from './Components/Home/Home/Home';
import SearchResults from './Components/SearchResults/SearchResults';
import VideoPage from './Components/VideoPage/VideoPage/VideoPage.jsx';
import { HOME, SEARCH, VIDEO } from './Constants/routes.js';

function App() {
	const dispatch = useDispatch();
	useEffect(() => {
		const token = window.localStorage.getItem('token');
		if (token) {
			const user_id = jwtDecode(token).user_id;
			dispatch(setUser({ user_id, token }));
		}
	}, [dispatch]);

	return (
		<div className='App'>
			<SignInModal />
			<SignUpModal />
			<NavBar />
			<Routes>
				<Route exact path={HOME} element={<Home />} />
				<Route path={SEARCH} element={<SearchResults />} />
				<Route path={VIDEO} element={<VideoPage />} />
			</Routes>
		</div>
	);
}

export default App;
