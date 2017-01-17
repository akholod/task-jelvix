'use strict';

module.exports = angular.module('app.usersList',[])
    .directive('usersList', require('./user-list'))
    .controller('UserListCtrl', require('./controllers/user-list.controller'));