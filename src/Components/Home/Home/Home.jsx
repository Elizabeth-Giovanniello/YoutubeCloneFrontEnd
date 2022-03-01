import React, { useEffect } from "react";
import VideoPanel from "../VideoPanel/VideoPanel";
import { useDispatch, useSelector } from 'react-redux';
import { home, populateVideos } from '../Home/HomeSlice';

const Home = (props) => {

    const dispatch = useDispatch();
    const {trending, popular, news} = useSelector(state => state.home)

    useEffect(() => {
        dispatch(populateVideos());
      }, []);


    return ( 
        <div>
            <VideoPanel title={"Trending"} videos={trending}/>
            <VideoPanel title={"News"} videos={news}/>
            <VideoPanel title={"Popular"} videos={popular}/>
        </div>
     );
}
 
export default Home;