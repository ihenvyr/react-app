import User from '../models/User';
import Product from '../models/Product';
import Brand from '../models/Brand';
import Counter from '../models/Counter';

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
