import React from 'react';

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