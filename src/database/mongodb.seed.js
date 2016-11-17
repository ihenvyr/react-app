const User = require('../models/User').default;
const Product = require('../models/Product').default;
const Brand = require('../models/Brand').default;
const Counter = require('../models/Counter').default;
const config = require('../config');
const mongoose = require('mongoose');
const debug = require('debug')('app:mongodb:seed');

debug('Connect to mongodb');
mongoose.connect(config.mongodb());
mongoose.Promise = require('bluebird');

const counter = new Counter({ _id: '582c6bf3bfa4d57c168fbebb', user_id: '5826780eb874f0602d6de07d' });
counter.save(error => {
  if (error) {
    throw error;
  }

  debug('Counter db:seed completed!')
});

const brands = [
  {
    _id: '5826780eb874f0602d6de07b',
    name: 'Bench',
  },
  {
    _id: '5826780eb874f0602d6de07c',
    name: 'Under Armour',
  },
];

brands.forEach((brand, index) => {
  const object = new Brand(brand);

  object.save(error => {
    if (error) {
      console.log('Error', error);
    }

    if (index + 1 === brands.length) {
      debug('Brand db:seed completed!');
    }
  });
});

const users = [
  {
    email: 'john@email.com',
    password: '1233456',
    role: 'user'
  },
  {
    _id: '5826780eb874f0602d6de07d',
    email: 'ihenvyr@email.com',
    password: '1233456',
    role: 'admin'
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
];

users.forEach((user, index) => {
  const object = new User(user);
  object.save(error => {
    if (error) {
      console.log('Error', error);
    }

    if (index + 1 === users.length) {
      debug('User db:seed completed!');
    }
  });
});

const products = [
  {
    name: 'Briefs',
    brand_id: '5826780eb874f0602d6de07b',
    user_id: '5826780eb874f0602d6de07d',
    variants: [
      { position: 1, name: 'small', cost: 30, price: 45, quantity: 100, images: [] },
      { position: 2, name: 'medium', cost: 30, price: 45, quantity: 100, images: [] },
      { position: 3, name: 'large', cost: 35, price: 50, quantity: 100, images: [] },
      { position: 4, name: 'x-large', cost: 35, price: 50, quantity: 100, images: [] },
    ],
  },
  {
    name: 'Boxer Shorts',
    brand_id: '5826780eb874f0602d6de07b',
    user_id: '5826780eb874f0602d6de07d',
    variants: [
      { position: 1, name: 'small', cost: 40, price: 60, quantity: 100, images: [] },
      { position: 2, name: 'medium', cost: 40, price: 60, quantity: 100, images: [] },
      { position: 3, name: 'large', cost: 40, price: 60, quantity: 100, images: [] },
      { position: 4, name: 'x-large', cost: 40, price: 60, quantity: 100, images: [] },
    ],
  },
];

setTimeout(() => {
  products.forEach((product, index) => {
    const object = new Product(product);

    object.save(error => {
      if (error) {
        console.log('Error', error);
      }

      if (index + 1 === products.length) {
        debug('Products db:seed completed!');
      }
    })
  });
}, 2000);
