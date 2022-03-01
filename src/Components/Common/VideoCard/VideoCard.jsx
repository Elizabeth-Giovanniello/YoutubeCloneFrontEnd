import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Card, Col } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { setCurrentVideo } from '../../VideoPage/VideoPage/VideoSlice';
import { VIDEO } from '../../../Constants/routes';

const VideoCard = (props) => {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    function handleVideoSelect(){
        dispatch(setCurrentVideo(props.video));
        navigate(VIDEO);
    }

    return ( 
        <Col>
            <Card onClick={handleVideoSelect}>
                <Card.Img variant="top" src={props.video.snippet.thumbnails.high.url}/>
                <Card.Body>
                <Card.Title>{props.video.snippet.title}</Card.Title>
                <Card.Text>
                    {props.video.snippet.description}
                </Card.Text>
                </Card.Body>
            </Card>
        </Col>
     );
}
 
export default VideoCard;