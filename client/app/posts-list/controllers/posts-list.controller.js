'use strict';

module.exports = function($stateParams, PostsHandler, UserHandler, $window) {
    this.previusState = function () {
        $window.history.back();
    };
    PostsHandler.getAllUserPosts($stateParams.id)
        .then((response) => {
            this.posts = response;
        });
    UserHandler.getUser($stateParams.id)
        .then((response) => {
            this.currentUser = response;
        });
};