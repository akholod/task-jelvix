'use strict';

module.exports = function($stateParams, PostsHandler) {
    PostsHandler.getAllUserPosts($stateParams.id)
        .then((response) => {
            this.posts = response;
        })
};