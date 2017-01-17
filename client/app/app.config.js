'use strict';

module.exports = angular.module('app')
    .config(function ($stateProvider, $urlRouterProvider, RestangularProvider) {

        $stateProvider
            .state('users', {
                url: '/users',
                template: '<users-list></users-list>'
            })
            .state('userPosts', {
                url: '/posts/:id',
                template: '<posts-list></posts-list>'
            })
            .state('postComments', {
                url: '/comments/:id',
                template: '<comments-list></comments-list>'
            });

        $urlRouterProvider.otherwise('/users');

        RestangularProvider.setBaseUrl("https://jsonplaceholder.typicode.com");
    });