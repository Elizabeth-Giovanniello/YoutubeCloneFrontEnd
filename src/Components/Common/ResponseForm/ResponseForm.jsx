import React, { useState } from 'react';


const ResponseForm = ({type, handleSubmit, setShowForm, response=""}) => {

    const [response, setResponse] = useState(response);

    const handleChange = e => {
		setResponse(e.target.value);
	};

    const handleCancel = () => {
		setShowForm(false);
	};
    
    const handleSubmit = () => {
        handleSubmit();
    }

    return ( 
        <div className='py-1'>
			<form id={`${type}-form`} onSubmit={handleSubmit()}>
				<div>
					<TextField
						fullWidth
						autoComplete='off'
						label={`Add a ${type}...`}
						variant='standard'
						value={response}
						onChange={handleChange}
					/>
				</div>
				<div className='d-flex justify-content-between py-1'>
					<div></div>
					<div>
						<Button onClick={handleCancel} variant='text' className='ms-3'>
							CANCEL
						</Button>
						<Button form={`${type}-form`} type='submit' variant='contained' className='ms-3'>
							{type.toUpperCase()}
						</Button>
					</div>
				</div>
			</form>
		</div>
     );
}
 
export default ResponseForm;

//props that will need to be passed in: type={reply}, handleSubmit={handleSumbit}, setShowFomr={setShowReplyForm} response={reply.body}