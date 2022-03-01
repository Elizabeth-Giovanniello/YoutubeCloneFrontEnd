import React, { useState } from 'react';
import { Card, Collapse, Button } from 'react-bootstrap';

const SingleComment = (props) => {

    const [open, setOpen] = useState(false);
      
     
      

    return ( 
        <Card>
            <Card.Header>Username</Card.Header>
            <Card.Body>
                <Card.Title>Username</Card.Title>
                <Card.Text>
                This is where the comment will go.
                </Card.Text>
                <Button
                    onClick={() => setOpen(!open)}
                    aria-controls="example-collapse-text"
                    aria-expanded={open}>
              {(open ? "View" : "Hide")} replies
            </Button>
            </Card.Body>
            <Card.Footer>
            <Collapse in={open}>
              <div id="example-collapse-text">
                Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
                terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer
                labore wes anderson cred nesciunt sapiente ea proident.
              </div>
            </Collapse>
            </Card.Footer>
        </Card>
     );
}
 
export default SingleComment;