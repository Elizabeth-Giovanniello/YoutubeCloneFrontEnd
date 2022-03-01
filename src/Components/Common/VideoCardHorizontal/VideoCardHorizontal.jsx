import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Card, Row, Col } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { setCurrentVideo } from '../../VideoPage/VideoPage/VideoSlice';
import { VIDEO } from '../../../Constants/routes';
import './VideoCardHorizontal.css';

const VideoCardHorizontal = (props) => {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    function handleVideoSelect(){
        dispatch(setCurrentVideo(props.video));
        navigate(VIDEO);
    }

    return ( 
        <Row className="mb-3">
        <Col>
            <Card onClick={handleVideoSelect}>
                <Row className='g-0'>
                    <Col xs={6} sm={5} md={4} className="thumb">
                        <Card.Img src={props.video.snippet.thumbnails.high.url}/>
                    </Col>
                    <Col xs={6} sm={7} md={8}>
                        <Card.Body>
                            <Card.Title>{props.video.snippet.title}</Card.Title>
                            <Card.Text>
                            {props.video.snippet.channelTitle}
                            </Card.Text>
                            <small>{props.video.snippet.description}</small>
                        </Card.Body>
                    </Col>
                </Row>
            </Card>
        </Col>
        </Row>
     );
}
 
export default VideoCardHorizontal;