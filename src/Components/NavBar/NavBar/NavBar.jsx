import React from 'react';
import { Navbar, Button, Container } from 'react-bootstrap';
import { Film } from 'react-bootstrap-icons';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import SignInButton from '../../Common/SignInButton/SignInButton';
import { useSelector } from 'react-redux';
import LogoutButton from '../LogOutBtn/LogOutBtn.jsx';
import SearchBar from '../SearchBar/SearchBar.jsx';
import { useNavigate } from 'react-router-dom';
import { HOME } from '../../../Constants/routes.js';

const NavBar = props => {
	const currentUser = useSelector(state => state.user);
	const navigate = useNavigate();

	const userDisplay = currentUser.user_id ? <LogoutButton /> : <SignInButton />;

	return (
		<Navbar sticky='top' bg='dark' variant='dark'>
			<Container fluid className='text-white'>
				<Navbar.Brand
					className='clickable'
					onClick={() => {
						navigate(HOME);
					}}>
					<Film size={35} />
					{' WeTube'}
				</Navbar.Brand>
				<SearchBar />
				{userDisplay}
			</Container>
		</Navbar>
	);
};

export default NavBar;
