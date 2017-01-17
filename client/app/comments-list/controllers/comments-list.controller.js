'use strict';

module.exports = function($stateParams, CommentHandler, PostsHandler) {
    CommentHandler.getAllPostComments($stateParams.id)
        .then((response) => {
            this.comments = response;
        });
    PostsHandler.getPost($stateParams.id)
        .then((response) => {
            this.currentPost = response;
        });
};