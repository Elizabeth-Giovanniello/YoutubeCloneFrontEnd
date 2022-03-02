// TOKEN
export const TOKEN = localStorage.getItem('token');

export const AUTH_HEADER = {
	headers: {
		authorization: `Bearer ${TOKEN}`,
	},
};

export const addCommentReqBody = (body, user_id, video_id) => {
	return { body, user_id, video_id };
};
