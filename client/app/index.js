'use strict';

//webpack dependencies
require('angular');
require('angular-ui-router');
require('restangular');

// application initialization
require('./app');
require('./app.config');
require('./services');

//style scss compiling
require("!style-loader!css-loader!resolve-url-loader!sass-loader!../styles/main.scss");