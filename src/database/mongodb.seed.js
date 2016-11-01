const User = require('../models/User').default;
const config = require('../config');
const mongoose = require('mongoose');
const debug = require('debug')('app:mongodb:seed');

debug('Connect to mongodb');
mongoose.connect(config.mongodb());
mongoose.Promise = require('bluebird');

User.insertMany([
  {
    email: 'john@email.com',
    password: '1233456',
    role: 'user'
  },
  {
    email: 'jane@email.com',
    password: '1233456',
    role: 'user'
  },
  {
    email: 'james@email.com',
    password: '1233456',
    role: 'user'
  }
]).then(response => {
  console.log('response', response);
});
