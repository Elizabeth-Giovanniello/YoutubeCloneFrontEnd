import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Card, Col } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { setCurrentVideo } from '../../VideoPage/VideoPage/VideoSlice';
import { VIDEO } from '../../../Constants/routes';
import './VideoCard.css'

const VideoCard = (props) => {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    function handleVideoSelect(){
        dispatch(setCurrentVideo(props.video));
        navigate(VIDEO);
    }

    return ( 
        <Col xs={12} sm={5} md={4} lg={4} xl={3}>
            <Card onClick={handleVideoSelect}>
                <div className="thumb">
                    <Card.Img variant="top" src={props.video.snippet.thumbnails.high.url}/>
                </div>
                <Card.Body>
                <Card.Title>{props.video.snippet.title}</Card.Title>
                <Card.Text>
                    <small>{props.video.snippet.channelTitle}</small>
                </Card.Text>
                </Card.Body>
            </Card>
        </Col>
     );
}
 
export default VideoCard;