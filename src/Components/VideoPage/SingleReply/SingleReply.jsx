import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import { ThumbUpOffAlt, ThumbDownOffAlt, ThumbUpAlt, ThumbDownAlt } from '@mui/icons-material';

const SingleReply = (props) => {

      

    return ( 
        <Card  className="border-0">
            <Card.Header className="bg-white border-0"><strong>{props.reply.user.username} </strong><small className='text-muted'>{props.reply.timestamp}</small></Card.Header>
            <Card.Body className="pb-1 pt-0">
                <Card.Text>
                {props.reply.body}
                </Card.Text>
            </Card.Body>
            <Card.Footer className="bg-white border-0">
                <ThumbUpOffAlt fontSize='small'/><small className='text-muted'> {props.reply.likes.length} </small><ThumbDownOffAlt fontSize='small'/><small className="text-muted"> REPLY</small>
            </Card.Footer>
        </Card>
     );
}
 
export default SingleReply;