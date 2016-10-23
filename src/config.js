const debug = require('debug')('app:config');

debug('Creating application configuration');
const config = {
  // Environment
  env: process.env.NODE_ENV || 'development',

  // Server
  server_host: '127.0.0.1', // require('ip').address(), // 'localhost'
  server_port: process.env.PORT || 8000,
  server_protocol: 'http:'
};

config.globals = {
  // Globals
  'process.env': {
    'NODE_ENV': JSON.stringify(config.env)
  },
  'NODE_ENV': config.env,
  '__DEV__': config.env === 'development',
  '__PROD__': config.env === 'production',
  '__TEST__': config.env === 'test',
  '__DEBUG__': config.env === 'development'
};

module.exports = config;
