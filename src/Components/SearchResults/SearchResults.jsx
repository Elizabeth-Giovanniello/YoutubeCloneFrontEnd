import React from "react";
import { Container } from "react-bootstrap";
import { useSelector } from "react-redux";
import VideoCardHorizontal from "../Common/VideoCardHorizontal/VideoCardHorizontal";

const SearchResults = (props) => {


    const searchResults = useSelector(state => state.search.results);
    console.log(searchResults)

    return ( 
        <Container>
        {searchResults.map(function(video){
            return (<VideoCardHorizontal video={video}/>);
        })}
        </Container>
     );
}
 
export default SearchResults;