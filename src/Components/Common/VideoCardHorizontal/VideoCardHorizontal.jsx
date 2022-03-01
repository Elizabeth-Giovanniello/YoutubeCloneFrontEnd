import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Card, Row, Col } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { setCurrentVideo } from '../../VideoPage/VideoPage/VideoSlice';
import { VIDEO } from '../../../Constants/routes';

const VideoCardHorizontal = (props) => {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    function handleVideoSelect(){
        dispatch(setCurrentVideo(props.video));
        navigate(VIDEO);
    }

    return ( 
        <Col>
            <Card onClick={handleVideoSelect}>
                <Row className='g-0'>
                    <Col className='md-4'>
                        <Card.Img src={props.video.snippet.thumbnails.high.url}/>
                    </Col>
                    <Col className='md-8'>
                        <Card.Body>
                            <Card.Title>{props.video.snippet.title}</Card.Title>
                            <Card.Text>
                            {props.video.snippet.description}
                            </Card.Text>
                        </Card.Body>
                    </Col>
                </Row>
            </Card>
        </Col>
     );
}
 
export default VideoCardHorizontal;