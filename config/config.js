'use strict';

var env = process.env.NODE_ENV || 'production';

if(env !== 'local' && env !== 'development' && env !== 'stage'){
    env = 'production';
}

var config = require('./config.'+env);

module.exports = config;