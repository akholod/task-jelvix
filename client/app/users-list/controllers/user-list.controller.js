'use strict';

module.exports = function(UserHandler) {
    UserHandler.getAllUsers()
        .then((response) => {
            this.users = response;
        })
};