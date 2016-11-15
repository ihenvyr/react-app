import mongoose from 'mongoose';
mongoose.Promise = require('bluebird');
import { brandSchema } from './Brand';
const connection = mongoose.createConnection('mongodb://localhost:27017/reactapp_test');
const Brand = connection.model('Brand', brandSchema);

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

  describe('Brand', () => {
    it("should have a valid 'products' virtual property", function(done) {
      Brand.create({ name: 'Fox Racing' }, function(error, brand) {
        Brand.populate(brand, { path: 'products' }, function(error, brand) {
          expect(brand.products).to.deep.equal([]);
          done();
        });
      });
    });
  });
});
