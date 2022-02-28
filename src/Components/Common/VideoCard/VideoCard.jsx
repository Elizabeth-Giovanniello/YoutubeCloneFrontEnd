import React from 'react';
import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap';

const VideoCard = ({title, description, thumbnail, orientation="top"}) => {

    return ( 
        <Link to='video'>
            <Card>
                <Card.Img variant={orientation} src={thumbnail}/>
                <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>
                    {description}
                </Card.Text>
                </Card.Body>
            </Card>
        </Link>
     );
}
 
export default VideoCard;