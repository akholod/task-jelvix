'use strict';

module.exports = function (Restangular) {
    this.getAllPostComments = function(id) {
        return Restangular.all('posts', id).getList('comments')
            .then((response) => {
                return response;
            }, (dataError) => {
               console.log(new Error((dataError)));
            });
    };
};