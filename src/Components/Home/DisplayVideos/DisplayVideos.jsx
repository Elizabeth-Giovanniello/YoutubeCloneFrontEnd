import React from 'react';
import VideoPanel from '../VideoPanel/VideoPanel';

const DisplayVideos = (props) => {

    const videos = [{title: "Ham Video", description: "This video is for lovers of ham. And for haters of ham who love to hate-watch."}, {title: "ffff", description: 'fffffffffffff'}, {title: "So cheesey!", description: "We are rivals with the ham guys. We prefer cheese."}]


    return ( 
        <div>
            <VideoPanel title={"Popular Videos"} videos={videos}/>
            
        </div>
     );
}
 
export default DisplayVideos;