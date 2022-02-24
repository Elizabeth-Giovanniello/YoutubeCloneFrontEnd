import { Button } from "@mui/material";
import React from "react";
// import { Button } from 'react-bootstrap';


const SignInButton = ({variant="outlined"}) => {
    return ( 
        <Button variant={variant}>Sign In</Button>
     );
}
 
export default SignInButton;