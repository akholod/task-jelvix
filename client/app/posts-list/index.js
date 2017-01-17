'use strict';

module.exports = angular.module('app.postsList',[])
    .directive('postsList', require('./posts-list'))
    .controller('PostsListCtrl', require('./controllers/posts-list.controller'));
