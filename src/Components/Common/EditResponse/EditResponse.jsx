import React from 'react';
import ResponseForm from '../ResponseForm/ResponseForm';
import { editCommentPath } from '../../../Constants/apiPaths';
import { AUTH_HEADER } from '../../../Helpers/requests';
import './OptionsMenu.css'

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

    return ( 
        <div>
            <ResponseForm/>
        </div>
     );
}
 
export default EditResponse;