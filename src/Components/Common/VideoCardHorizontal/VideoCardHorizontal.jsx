import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Row, Col } from 'react-bootstrap';

const VideoCardHorizontal = ({title, description, thumbnail}) => {

    return ( 
        <Link to='video'>
            <Card>
                <Row className='g-0'>
                    <Col className='md-4'>
                        <Card.Img src={thumbnail}/>
                    </Col>
                    <Col className='md-8'>
                        <Card.Body>
                            <Card.Title>{title}</Card.Title>
                            <Card.Text>
                                {description}
                            </Card.Text>
                        </Card.Body>
                    </Col>
                </Row>
            </Card>
        </Link>
     );
}
 
export default VideoCardHorizontal;