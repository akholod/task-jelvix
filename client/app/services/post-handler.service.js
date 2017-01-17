'use strict';

module.exports = function (Restangular) {
    this.getAllUserPosts = function(id) {
        return Restangular.one('users', id).getList('posts')
            .then((response) => {
                return response;
            }, (dataError) => {
                console.log(new Error((dataError)));
            });
    };
};
