import mongoose from 'mongoose';
mongoose.Promise = require('bluebird');
import { userSchema } from './User';
const connection = mongoose.createConnection('mongodb://localhost:27017/reactapp_test');
const User = connection.model('User', userSchema);

import { describe, it, beforeEach, afterEach } from 'mocha';
import { expect } from 'chai';

describe('model', function() {
  beforeEach(function(done) {
    // remove entries from db
    connection.db.dropDatabase(function(error, result) {
      if (error) {
        // console.log('beforeEach error:', error);
        return done();
      }
      // console.log('beforeEach result:', result);
      done();
    });
  });

  // afterEach(function(done) {
  //   // populate db seed
  //   User.create({ email: 'hello@world.com', password: '123456', role: 'user' }, function(error, user) {
  //     if (error) {
  //       return done();
  //     }
  //     done();
  //   });
  // });

  describe('User', () => {
    it("should have a valid indexes", function() {
      const indexes = User.schema.indexes();
      // console.log(indexes);
    });

    it("should have a valid 'admin' virtual property", function(done) {
      User.create({ email: 'user3@email.com', password: '123456', role: 'user' }, function(error, user) {
        expect(user.admin).to.equal(false);
        done();
      });
    });

    it("should have a valid 'products' virtual property", function(done) {
      User.create({ email: 'user3@email.com', password: '123456', role: 'user' }, function(error, user) {
        User.populate(user, { path: 'products' }, function(error, user) {
          expect(user.products).to.deep.equal([]);
          done();
        });
      });
    });

    it("should convert the password into hash on User create", function(done) {
      User.create({ email: 'user1@email.com', password: '123456', role: 'user' }, function(error, user) {
        expect(user.password).to.not.equal('123456');
        done();
      });
    });

    it("should have a 'validPassword' instance method", function(done) {
      this.timeout(5000);

      User.create({ email: 'user2@email.com', password: '123456', role: 'user' }, function(error, user) {
        expect(user.validPassword('123456')).to.equal(true);
        expect(user.validPassword('789012')).to.equal(false);
        done();
      });
    });

    // TODO
    // it("should not create a user when email is already exist", function(done) {
    //   User.create({ email: 'hello@world.com', password: 'abcdef', role: 'user' }, function(error, user) {
    //     if (error) {
    //       console.log('error', error);
    //       throw Error(error);
    //     }
    //     console.log('user created:', user);
    //
    //     User.create({ email: 'hello@world.com', password: 'abcdef', role: 'user' }, function(error, user) {
    //       if (error) {
    //         console.log('error', error);
    //         throw Error(error);
    //       }
    //       console.log('user re-created:', user);
    //
    //       done();
    //     });
    //   });
    // });
  });
});
