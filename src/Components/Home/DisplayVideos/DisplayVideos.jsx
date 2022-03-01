import React from 'react';
import VideoPanel from '../VideoPanel/VideoPanel';
import { useDispatch } from 'react-redux';
import { populateVideos } from '../Home/HomeSlice';

const DisplayVideos = (props) => {


    const dispatch = useDispatch();
    const videos = [{title: "Ham Video", description: "This video is for lovers of ham. And for haters of ham who love to hate-watch.", thumbnail: "https://i.ytimg.com/vi/nhDAmqYHxdA/hqdefault.jpg"}, {title: "ffff", description: 'fffffffffffff', thumbnail: "https://i.ytimg.com/vi/nhDAmqYHxdA/hqdefault.jpg"}, {title: "So cheesey!", description: "We are rivals with the ham guys. We prefer cheese.", thumbnail: "https://i.ytimg.com/vi/nhDAmqYHxdA/hqdefault.jpg"}]


    return ( 
        <div>
            <VideoPanel title={"Popular Videos"} videos={videos}/>
        </div>
     );
}
 
export default DisplayVideos;