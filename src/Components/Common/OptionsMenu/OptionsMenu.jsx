import React, { useState } from 'react';
import { DropdownButton, Dropdown } from 'react-bootstrap';
import { ThreeDotsVertical, PencilFill, TrashFill } from 'react-bootstrap-icons';
import './OptionsMenu.css'


const OptionsMenu = (props) => {

    const [isHighlighted, setIsHighlighted] = useState(false);


    return ( 
        <Dropdown drop='end'>
            <Dropdown.Toggle variant="basic" className='float-end p-0'>
                <ThreeDotsVertical className={'p-0' + (isHighlighted ? " text-danger" : " text-secondary")} onMouseEnter={()=>setIsHighlighted(true)} onMouseLeave={()=>setIsHighlighted(false)}></ThreeDotsVertical>
            </Dropdown.Toggle>
            <Dropdown.Menu className="p-0">
                <Dropdown.Item className="p-0">
                    <p className="ps-3 m-0 pb-2 pt-2">
                        <PencilFill className="text-danger me-3" size={18}/>
                    Edit
                    </p>
                </Dropdown.Item>
                <Dropdown.Item className="p-0">
                    <p className="ps-3 m-0 pb-2 pt-2">
                        <TrashFill className="text-danger me-3" size={18}/>
                    Delete
                    </p>
                </Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    );
}
 
export default OptionsMenu;