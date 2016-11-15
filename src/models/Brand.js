import mongoose from 'mongoose';

const brandSchema = new mongoose.Schema({
  name: { type: String, trim: true },
  description: { type: String, trim: true },
  images: [{ type: String, trim: true }],
}, {
  timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' }
});

brandSchema.virtual('products', {
  ref: 'Product',
  localField: '_id',
  foreignField: 'brand_id',
});

export { brandSchema };

export default mongoose.model('Brand', brandSchema);
