import apiPaths from './Constants/apiPaths';
import NavBar from './Components/NavBar/NavBar/NavBar.jsx';
import './App.css';
import SignInModal from './Components/SignInModal/SignInModal/SignInModal.jsx';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setUser } from './Redux/userSlice.js';
import jwtDecode from 'jwt-decode';
import SignUpModal from './Components/SignUpModal/SignUpModal.jsx';

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
		</div>
	);
}

export default App;
