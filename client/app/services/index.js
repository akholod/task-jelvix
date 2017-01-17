'use strict';

module.exports = angular.module('app')
    .service('UserHandler', require('./user-handler.service'))
    .service('PostsHandler', require('./post-handler.service'))
    .service('CommentHandler', require('./comment-handler.service'));