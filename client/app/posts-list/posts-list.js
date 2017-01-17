'use strict';

module.exports = function() {
    return {
        restrict: 'E',
        scope: {},
        template: require('./templates/posts-list.html'),
        controller: 'PostsListCtrl',
        controllerAs: 'postsListCtrl',
    };
};