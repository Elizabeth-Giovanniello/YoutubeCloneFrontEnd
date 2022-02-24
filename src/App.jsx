import apiPaths from './Constants/apiPaths';
import NavBar from './Components/NavBar/NavBar/NavBar.jsx';
import './App.css';
import SignInModal from './Components/SignInModal/SignInModal/SignInModal.jsx';

function App() {
	return (
		<div className='App'>
			<SignInModal />
			<NavBar />
		</div>
	);
}

export default App;
