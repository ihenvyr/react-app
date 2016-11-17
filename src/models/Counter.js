import mongoose from 'mongoose';

const counterSchema = new mongoose.Schema({
  count: { type: Number, default: 0 },
  description: { type: String, trim: true },
  user_id: { type: String },
}, {
  timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' }
});

export { counterSchema };

export default mongoose.model('Counter', counterSchema);
