import { Button } from '@mui/material';
import { blue } from '@mui/material/colors';
import React from 'react';
import { Dropdown } from 'react-bootstrap';
import { BoxArrowInRight, PersonCircle } from 'react-bootstrap-icons';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { clearUser } from '../../../Redux/userSlice.js';
import './LogOutBtn.css';

const LogoutButton = ({ variant = 'outlined' }) => {

	const username = useSelector(state => state.user.username);
	const dispatch = useDispatch();

	const handleClick = () => dispatch(clearUser());

	return (
		<>
		<Dropdown  drop="start">
			<Dropdown.Toggle variant="basic" className='text-white p-0 me-4'>
				<PersonCircle  size={37}/>
			</Dropdown.Toggle>
			<Dropdown.Menu className='p-0'>
				<Dropdown.Item className="pt-2"><PersonCircle size={37} className='pe-2'/> <strong> {username}</strong></Dropdown.Item>
				<Dropdown.Item className="pt-2 pb-2" onClick={handleClick}><BoxArrowInRight size={28} className='pe-2'/> Sign out</Dropdown.Item>
			</Dropdown.Menu>
		</Dropdown>
		</>
	);
};

export default LogoutButton;
