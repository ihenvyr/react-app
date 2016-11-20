import User from '../models/UserModel';
import Product from '../models/ProductModel';
import Brand from '../models/BrandModel';
import Counter from '../models/CounterModel';

export const getBrands = () => {
  return Brand.find().populate('products');
};

export const getBrandsByIds = (brandIds) => {
  return Brand.find({ _id: { $in: brandIds } }).populate('products');
};

export const getUsers = () => {
  return User.find().populate('products counters');
};

export const getUsersByIds = (userIds) => {
  return User.find({ _id: { $in: userIds } }).populate('products counters');
};

export const getUsersByEmails = (userEmails) => {
  return User.find({ email: { $in: userEmails } }).populate('products counters');
};

export const getProducts = () => {
  return Product.find();
};

export const getProductsByIds = (productIds) => {
  return Product.find({ _id: { $in: productIds } });
};

export const getCounters = () => {
  return Counter.find();
};

export const getCountersByIds = (counterIds) => {
  return Counter.find({ _id: { $in: counterIds } });
};

export const counterCountReset = (counterId) => {
  return Counter.update({ _id: counterId }, { $set: { count: 0 } });
};

export const counterCountIncrement = (counterId) => {
  return Counter.findById(counterId).then(function(counter) {
    counter.count = counter.count + 1;
    return counter.save();
  });
};

export const counterCountDecrement = (counterId) => {
  return Counter.findById(counterId).then(function(counter) {
    counter.count = counter.count - 1;
    return counter.save();
  });
};
