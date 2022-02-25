import apiPaths from './Constants/apiPaths';
import NavBar from './Components/NavBar/NavBar/NavBar.jsx';
import './App.css';
import SignInModal from './Components/SignInModal/SignInModal/SignInModal.jsx';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setUser } from './Redux/userSlice.js';
import jwtDecode from 'jwt-decode';

function App() {
	const dispatch = useDispatch();
	useEffect(() => {
		const token = window.localStorage.getItem('token');
		const user_id = jwtDecode(token).user_id;
		dispatch(setUser({ user_id, token }));
	}, []);

	return (
		<div className='App'>
			<SignInModal />
			<NavBar />
		</div>
	);
}

export default App;
