import React from "react";
import { Navbar, Button, Container } from 'react-bootstrap';
import { Film } from 'react-bootstrap-icons';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import SignInButton from "../SignInButton/SignInButton";

const NavBar = (props) => {

    return ( 
        <Navbar sticky="top" bg="dark" variant="dark">
            <Container fluid>
                <Navbar.Brand>
                    <Film size={35}/>{' WeTube'}
                </Navbar.Brand>
                <SignInButton/>
            </Container>
        </Navbar>

    );
}
 
export default NavBar;