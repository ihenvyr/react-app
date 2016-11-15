import mongoose from 'mongoose';
mongoose.Promise = require('bluebird');
import { productSchema } from './Product';
const connection = mongoose.createConnection('mongodb://localhost:27017/reactapp_test');
const Product = connection.model('Product', productSchema);

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

  describe('Product', () => {
    it("should have a valid 'images' virtual property", function(done) {
      Product.create({
        name: 'Awesome Product',
        variants: [
          { position: 1, name: 'small', images: ['/small/1.jpg', '/small/2.jpg'] },
          { position: 2, name: 'medium', images: ['/medium/3.jpg'] }
        ],
      }, function(error, product) {
        expect(product.images).to.deep.equal(['/small/1.jpg', '/small/2.jpg', '/medium/3.jpg']);
        done();
      });
    });

    it("should have a valid 'cost' virtual property", function(done) {
      Product.create({
        name: 'Awesome Product',
        variants: [
          { position: 1, name: 'small', cost: 10 },
          { position: 2, name: 'medium', cost: 12 }
        ],
      }, function(error, product) {
        expect(product.cost).to.deep.equal([10, 12]);
        done();
      });
    });

    it("should have a valid 'price' virtual property", function(done) {
      Product.create({
        name: 'Awesome Product',
        variants: [
          { position: 1, name: 'small', price: 18 },
          { position: 2, name: 'medium', price: 18 }
        ],
      }, function(error, product) {
        expect(product.price).to.deep.equal([18]);
        done();
      });
    });

    it("should have a valid 'quantity' virtual property", function(done) {
      Product.create({
        name: 'Awesome Product',
        variants: [
          { position: 1, name: 'small', quantity: 20 },
          { position: 2, name: 'medium', quantity: 10 }
        ],
      }, function(error, product) {
        expect(product.quantity).to.equal(30);
        done();
      });
    });
  });
});
