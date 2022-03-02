import React from 'react';
import ResponseForm from '../ResponseForm/ResponseForm';
import { editCommentPath } from '../../../Constants/apiPaths';
import { AUTH_HEADER } from '../../../Helpers/requests';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { fetchComments } from '../../VideoPage/Comments/CommentsSlice';

const EditResponse = (props) => {

    const dispatch = useDispatch();

    async function editResponse(responseID, responseBody, pathFunc){

        let response = await axios.put(pathFunc(responseID), {body: responseBody}, AUTH_HEADER)
        .then(response => { 
        console.log(response)
        dispatch(fetchComments());
        })
        .catch(error => {
            console.log(error.response)
        });
    }

    function onSubmit(response) {
        editResponse(props.response.id, response.body, props.pathFunc);
    }

    function onCancel(){
        props.setShowEditForm(false);
    }

    return ( 
        <ResponseForm type={"comment"} onSubmit={onSubmit} onCancel={onCancel} resBody={props.response.body}/> 
     );
}
 
export default EditResponse;