import User from '../models/User';
import Product from '../models/Product';
import Brand from '../models/Brand';

export const getBrands = () => {
  Brand.find().populate('products');
};

export const getBrandsByIds = (brandIds) => {
  return Brand.find({ _id: { $in: brandIds } }).populate('products');
};

export const getUsers = () => {
  return User.find().populate('products');
};

export const getUsersByIds = (userIds) => {
  return User.find({ _id: { $in: userIds } }).populate('products');
};

export const getUsersByEmails = (userEmails) => {
  return User.find({ email: { $in: userEmails } }).populate('products');
};

export const getProducts = () => {
  return Product.find({}).populate('brand').populate('user');
};

export const getProductsByIds = (productIds) => {
  return Product.find({ _id: { $in: productIds } }).populate('brand').populate('user');
};
