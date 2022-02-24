
const root = "http://127.0.0.1:8000";

const addComment = root + "/api/comments/",

addReply = root + "/replies/",

login = root + '/api/auth/login/',

tokenRefresh = root + '/api/auth/login/refresh/',

register = root + '/api/auth/register/',


function getAllComments(videoID){
    return `${root}/api/${videoID}/`;
}

function getAllReplies(commentID){
    return `${addComment}${commentID}/`;
}

function editComment(commentID){
    return `${root}/comments/${commentID}/`;
}

function editReply(replyID){
    return `${root}/${replyID}/`;
}

function toggleLike(type, responseID){
    return `${root}/api/${type}/${responseID}/like/`;
}

function toggleDislike(type, responseID){
    return `${root}/api/${type}/${responseID}/dislike/`;
}


export default {addComment, addReply, login, tokenRefresh, register, getAllComments, getAllReplies, editComment, editReply, toggleLike, toggleDislike};