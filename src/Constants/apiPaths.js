const root = 'http://127.0.0.1:8000';

export const addCommentPath = root + '/comments/',
	addReplyPath = root + '/replies/',
	loginPath = root + '/auth/login/',
	tokenRefreshPath = root + '/auth/login/refresh/',
	registerPath = root + '/auth/register/';

export const allCommentsPath = videoID => `${root}/${videoID}/`;
export const allRepliesPath = commentID => `${addCommentPath}${commentID}/`;
export const editCommentPath = commentID => `${root}/comments/${commentID}/`;
export const editReplyPath = replyID => `${root}/${replyID}/`;
export const toggleLikePath = (type, responseID) => `${root}/${type}/${responseID}/like/`;
export const toggleDislikePath = (type, responseID) => `${root}/${type}/${responseID}/dislike/`;
