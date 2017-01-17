'use strict';

module.exports = function() {
    return {
        restrict: 'E',
        scope: {},
        template: require('./templates/comments-list.html'),
        controller: 'CommentsListCtrl',
        controllerAs: 'commentsListCtrl',
    };
};