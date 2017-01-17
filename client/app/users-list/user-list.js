'use strict';

module.exports = function() {
    return {
        restrict: 'E',
        scope: {},
        template: require('./templates/user-list.html'),
        controller: 'UserListCtrl',
        controllerAs: 'userListCtrl',
    };
};