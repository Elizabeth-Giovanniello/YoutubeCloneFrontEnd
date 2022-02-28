import React from 'react';
import { Card, Row, Col, Container } from 'react-bootstrap';
import VideoPlayer from '../../VideoPage/VideoPlayer/VideoPlayer';
import { Link } from 'react-router-dom';
import './VideoPanel.css'
import VideoCard from '../../Common/VideoCard/VideoCard';


const VideoPanel = (props) => {

    return ( 
        <Container className="mt-5 pb-5 border-bottom">
            <h3>{props.title}</h3>
            <Row>
                {Array.from({ length: props.videos.length / 2}).map((_, idx) => (
                    props.videos.map(function(video){
                        const vidCardProps = {
                            title: video.title,
                            description: video.description,
                            thumbnail: video.thumbnail,
                        };
                        return(
                            <Col>
                                <VideoCard {...vidCardProps}/>
                            </Col>);
                    })
                ))}
            </Row>
        </Container>
     );
    }
    
    export default VideoPanel;
