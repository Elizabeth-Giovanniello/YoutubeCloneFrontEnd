const root = 'http://127.0.0.1:8000';

export const addCommentPath = root + '/comments/',
	addReplyPath = root + '/replies/',
	loginPath = root + '/api/auth/login/',
	tokenRefreshPath = root + '/api/auth/login/refresh/',
	registerPath = root + '/api/auth/register/';

export const allCommentsPath = videoID => `${root}/api/${videoID}/`;
export const allRepliesPath = commentID => `${addCommentPath}${commentID}/`;
export const editCommentPath = commentID => `${root}/comments/${commentID}/`;
export const editReplyPath = replyID => `${root}/${replyID}/`;
export const toggleLikePath = (type, responseID) => `${root}/api/${type}/${responseID}/like/`;
export const toggleDislikePath = (type, responseID) => `${root}/api/${type}/${responseID}/dislike/`;
