'use strict';

module.exports = function($stateParams, CommentHandler, PostsHandler, $window) {
    this.previusState = function () {
        $window.history.back();
    };
    CommentHandler.getAllPostComments($stateParams.id)
        .then((response) => {
            this.comments = response;
        });
    PostsHandler.getPost($stateParams.id)
        .then((response) => {
            this.currentPost = response;
        });
};