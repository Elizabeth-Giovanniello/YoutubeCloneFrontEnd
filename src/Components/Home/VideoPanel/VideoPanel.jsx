import React from 'react';
import { Card, Row, Col, Container } from 'react-bootstrap';
import VideoPlayer from '../../VideoPage/VideoPlayer/VideoPlayer';
import { Link } from 'react-router-dom';
import './VideoPanel.css'


const VideoPanel = (props) => {
    return ( 
        <Container className="mt-5 pb-5 border-bottom">
            <h3>{props.title}</h3>
            <Row>
                {Array.from({ length: props.videos.length / 2}).map((_, idx) => (
                    props.videos.map(function(video){
                        return(<Col>
                            <Link to='video'>
                            <Card>
                                <Card.Img variant="top" src="https://i.ytimg.com/vi/nhDAmqYHxdA/hqdefault.jpg"/>
                                <Card.Body>
                                <Card.Title>{video.title}</Card.Title>
                                <Card.Text>
                                    {video.description}
                                </Card.Text>
                                </Card.Body>
                            </Card>
                            </Link>
                        </Col>)
                    })
                ))}
            </Row>
        </Container>
     );
}
 
export default VideoPanel;