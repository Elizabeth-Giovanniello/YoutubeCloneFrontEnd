const root = 'http://127.0.0.1:8000';

export const addCommentPath = root + '/comments/',
	addReply = root + '/replies/',
	login = root + '/api/auth/login/',
	tokenRefresh = root + '/api/auth/login/refresh/',
	register = root + '/api/auth/register/';

const allCommentsPath = videoID => `${root}/api/${videoID}/`;
const allRepliesPath = commentID => `${addCommentPath}${commentID}/`;
const editCommentPath = commentID => `${root}/comments/${commentID}/`;
const editReplyPath = replyID => `${root}/${replyID}/`;
const toggleLikePath = (type, responseID) => `${root}/api/${type}/${responseID}/like/`;
const toggleDislikePath = (type, responseID) => `${root}/api/${type}/${responseID}/dislike/`;

export default {
	addCommentPath,
	addReply,
	login,
	tokenRefresh,
	register,
	allCommentsPath,
	allRepliesPath,
	editCommentPath,
	editReplyPath,
	toggleLikePath,
	toggleDislikePath,
};
