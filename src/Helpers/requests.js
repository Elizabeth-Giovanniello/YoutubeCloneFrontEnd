// TOKEN
export const TOKEN = localStorage.getItem('token');

export const authHeader = () => {
	return {
		headers: {
			authorization: `Bearer ${localStorage.getItem('token')}`,
		},
	};
};

export const addCommentReqBody = (body, user_id, video_id) => {
	return { body, user_id, video_id };
};
