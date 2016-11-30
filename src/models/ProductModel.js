import mongoose from 'mongoose';
import _ from 'lodash';

const productSchema = new mongoose.Schema({
  name: { type: String, trim: true },
  description: { type: String, trim: true },
  user_id: { type: String },
  brand_id: { type: String },
  is_visible: { type: Boolean },
  variants: [{
    _id: false,
    position: { type: Number },
    sku: { type: String, trim: true },  // shirt-small, shirt-blue, shirt-blue-small
    name: { type: String, trim: true },  // small, blue, blue - small
    cost: { type: Number },
    price: { type: Number },
    quantity: { type: Number },
    images: [{ type: String }],
  }]
}, {
  timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' }
});

productSchema.virtual('images').get(function() {
  let images = [];

  this.variants.forEach(function(variant) {
    images = images.concat(variant.images);
  });

  return images;
});

productSchema.virtual('cost').get(function() {
  const min = _.minBy(this.variants, 'cost');
  const max = _.maxBy(this.variants, 'cost');

  if (min.cost === max.cost) {
    return [max.cost];
  }

  return [min.cost, max.cost];
});

productSchema.virtual('price').get(function() {
  const min = _.minBy(this.variants, 'price');
  const max = _.maxBy(this.variants, 'price');

  if (min.price === max.price) {
    return [max.price];
  }

  return [min.price, max.price];
});

productSchema.virtual('quantity').get(function() {
  let quantity = 0;

  this.variants.forEach(function(variant) {
    quantity += variant.quantity;
  });

  return quantity;
});

export { productSchema };

export default mongoose.model('Product', productSchema);
