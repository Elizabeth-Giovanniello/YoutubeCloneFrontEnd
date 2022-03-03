import React, { useState } from 'react';
import { Dropdown } from 'react-bootstrap';
import { ThreeDotsVertical, PencilFill, TrashFill } from 'react-bootstrap-icons';
import DeleteResponse from '../DeleteResponse/DeleteResponse';

import './OptionsMenu.css';

const OptionsMenu = ({ type, pathFunc, response, setShowEditForm }) => {

	return (
		<Dropdown>
			<Dropdown.Toggle variant='basic' className='float-end p-0'>
				<ThreeDotsVertical
					className='p-1 text-secondary' size={28}></ThreeDotsVertical>
			</Dropdown.Toggle>
			<Dropdown.Menu className='p-0'>
				<Dropdown.Item className='p-0' onClick={()=> setShowEditForm(true)}>
					<p className='ps-4 m-0 pb-2 pt-2'>
						<PencilFill className='me-1' size={18} />Edit</p>
				</Dropdown.Item>
				<Dropdown.Item className='p-0'>
					<DeleteResponse type={type} pathFunc={pathFunc} response={response} />
				</Dropdown.Item>
			</Dropdown.Menu>
		</Dropdown>
	);
};

export default OptionsMenu;
