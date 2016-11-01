const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const options = { usernameField: 'email', passwordField: 'password' };
import User from '../models/User';
const debug = require('debug')('app:server');

export default new LocalStrategy(options, function(email, password, done) {
  console.log('local strategy', 'email:', email, 'password:', password);

  User.findOne({ email: email }, function(err, user) {
    console.log('user', user);

    if (err) { return done(err); }
    if (!user) {
      return done(null, false, { message: 'Incorrect email.' });
    }
    if (!user.validPassword(password)) {
      return done(null, false, { message: 'Incorrect password.' });
    }
    return done(null, user);
  });
});
