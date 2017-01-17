'use strict';

require('./users-list');
require('./posts-list');
require('./comments-list');


module.exports =  angular.module('app', ['restangular', 'ui.router', 'app.usersList', 'app.postsList', 'app.commentsList']);