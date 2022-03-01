import React, { useEffect, useState } from 'react';
import { Card, Collapse, Button } from 'react-bootstrap';
import { CaretDownFill, CaretUpFill } from 'react-bootstrap-icons';
import { ThumbUpOffAlt, ThumbDownOffAlt, ThumbUpAlt, ThumbDownAlt } from '@mui/icons-material';

const SingleComment = (props) => {

    const [open, setOpen] = useState(false);
      

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
            <Card.Footer className="bg-white border-0 pt-0">
                <Button
                    variant="basic"
                    className="text-primary ps-0"
                    onClick={() => setOpen(!open)}
                    aria-controls="collapse-text"
                    aria-expanded={open}>
                    {open ? <CaretUpFill/> : <CaretDownFill/>}{(open ? " Hide" : " View")} replies
                </Button>
            </Card.Footer>
            <Card.Footer className="bg-white border-0">
            <Collapse in={open}>
              <div id="collapse-text">
                This is where the replies will go.
              </div>
            </Collapse>
            </Card.Footer>
        </Card>
     );
}
 
export default SingleComment;