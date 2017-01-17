'use strict';

module.exports = angular.module('app.commentsList',[])
    .directive('commentsList', require('./comments-list'))
    .controller('CommentsListCtrl', require('./controllers/comments-list.controller'));
