import React, { useEffect, useState } from 'react';
import { Card, Collapse, Button } from 'react-bootstrap';
import { CaretDownFill, CaretUpFill } from 'react-bootstrap-icons';
import { ThumbUpOffAlt, ThumbDownOffAlt, ThumbUpAlt, ThumbDownAlt } from '@mui/icons-material';

const SingleReply = (props) => {

      

    return ( 
        <Card  className="border-0">
            <Card.Header className="bg-white border-0"><strong>Username </strong><small className='text-muted'>[time]</small></Card.Header>
            <Card.Body className="pb-1 pt-0">
                <Card.Text>
                This is where the comment will go.
                </Card.Text>
            </Card.Body>
            <Card.Footer className="bg-white border-0">
                <ThumbUpOffAlt fontSize='small'/><small className='text-muted'> 69 </small><ThumbDownOffAlt fontSize='small'/><small className="text-muted"> REPLY</small>
            </Card.Footer>
        </Card>
     );
}
 
export default SingleReply;