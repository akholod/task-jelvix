'use strict';

module.exports = function (Restangular) {
    this.getAllUsers = function() {
        return Restangular.all('users').getList()
            .then((response) => {
                return response;
            }, (dataError) => {
                console.log(new Error((dataError)));
            });
    };

    this.getUser = function(id) {
        return Restangular.one('users', id).get()
            .then((response) => {
                return response;
            }, (dataError) => {
                console.log(new Error((dataError)));
            });
    };
};