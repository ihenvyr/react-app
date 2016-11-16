const express = require('express');
const bodyParser = require('body-parser');
const config = require('./config');
const resolve = require('path').resolve;
const debug = require('debug')('app:server');
const DataLoader = require('dataloader');
const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');

if (config.env === 'development') {
  const log = require('debug')('app:mongodb');
  mongoose.set('debug', (collection, method, query, doc) => {
    log('query:', collection, method, query);
  });
}

debug('Starting..');
const app = express();

debug('Configure body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ 'extended': 'true' }));

debug('Connect to mongodb');
mongoose.connect(config.mongodb());

// graphql
debug('Configure graphql schema');
import schema from './schema';
import graphqlHTTP from 'express-graphql';

// database specific methods on getting/updating the data
// this time it's from mongodb
import { getBrandsByIds, getUsersByIds, getUsersByEmails, getProductsByIds } from './database/mongodb';

app.use('/graphql', (req, res) => {
  debug('graphql query ==============================================================================================');
  debug('body', req.body);

  const viewer = {};
  const loaders = {
    getUsersByIds: new DataLoader(getUsersByIds),
    getUsersByEmails: new DataLoader(getUsersByEmails),
    getBrandsByIds: new DataLoader(getBrandsByIds),
    getProductsByIds: new DataLoader(getProductsByIds),
  };

  graphqlHTTP({
    schema: schema,
    graphiql: true,
    context: { viewer, loaders } // context will be on the third argument of resolve(object, args, context)
  })(req, res);
});

// passport
// debug('Configure passport local strategy');
// import passport from 'passport';
// import local from './strategies/local';
// passport.use(local);

// passport signin route
// app.post('/signin', passport.authenticate('local', {
//   successRedirect: '/',
//   failureRedirect: '/signin',
//   failureFlash: false
// }));

import User from './models/User';
app.post('/signin', (req, res) => {
  const { email, password } = req.body;
  User.findOne({ email: email }, function(err, user) {
    if (err) { return res.json(err); }
    if (!user) { return res.json({ message: 'Incorrect email.' }); }
    if (!user.validPassword(password)) { return res.json({ message: 'Incorrect password.' }); }
    return res.json({ user });
  });
});

app.post('/foo', (req, res) => {
  res.json({ foo: 'barr' });
});

if (process.env.NODE_ENV === 'development') {
  const webpack = require('webpack');
  const webpackConfig = require('../webpack.config.development');
  const historyApiFallback = require('connect-history-api-fallback');
  const compiler = webpack(webpackConfig);

  debug('Configure connect-history-api-fallback');
  app.use(historyApiFallback({ verbose: false }));

  debug('Configure webpack-dev-middleware');
  app.use(require('webpack-dev-middleware')(compiler, {
    publicPath: '/',
    hot: true,
    quiet: false,
    noInfo: false,
    lazy: false,
    historyApiFallback: true,
    stats: {
      chunks: false,
      chunkModules: false,
      colors: true
    }
  }));

  debug('Configure webpack-hot-middleware');
  app.use(require('webpack-hot-middleware')(compiler));

  debug('Serve src/static as /static');
  app.use('/static', express.static(resolve('src', 'static')));
}

if (process.env.NODE_ENV === 'production') {
  // serve static assets normally
  debug('Serve dist as /static');
  app.use('/static', express.static(resolve('dist')));

  // handle every other route with index.html, which will contain
  // a script tag to your application's JavaScript file(s).
  debug('Serve index.html to all GET request');
  app.get('*', function (request, response){
    response.sendFile(resolve('dist', 'index.html'));
  });
}

app.listen(config.server_port);
debug(`Server is now running at ${config.server_protocol}//${config.server_host}:${config.server_port}`);
