import React from 'react';
import { Navbar, Button, Container } from 'react-bootstrap';
import { Film } from 'react-bootstrap-icons';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import SignInButton from '../SignInButton/SignInButton';
import { useSelector } from 'react-redux';
import LogoutButton from '../LogOutBtn/LogOutBtn.jsx';

const NavBar = props => {
	const currentUser = useSelector(state => state.user);

	const userDisplay = currentUser.user_id ? <LogoutButton /> : <SignInButton />;

	return (
		<Navbar sticky='top' bg='dark' variant='dark'>
			<Container fluid className='text-white'>
				<Navbar.Brand>
					<Film size={35} />
					{' WeTube'}
				</Navbar.Brand>
				{userDisplay}
			</Container>
		</Navbar>
	);
};

export default NavBar;
