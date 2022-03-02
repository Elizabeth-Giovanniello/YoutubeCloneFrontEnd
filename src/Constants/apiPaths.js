const root = 'http://127.0.0.1:8000';

export const addCommentPath = root + '/add_comment/',
	addReplyPath = root + '/add_reply/',
	loginPath = root + '/auth/login/',
	tokenRefreshPath = root + '/auth/login/refresh/',
	registerPath = root + '/auth/register/';

export const allCommentsPath = videoID => `${root}/get_comments/${videoID}/`;
export const allRepliesPath = commentID => `${root}/view_replies/${commentID}/`;
export const editCommentPath = commentID => `${root}/edit_comment/${commentID}/`;
export const editReplyPath = replyID => `${root}/edit_reply/${replyID}/`;
export const toggleLikePath = (type, responseID) => `${root}/like/${type}/${responseID}/`;
export const toggleDislikePath = (type, responseID) => `${root}/dislike/${type}/${responseID}/`;
