import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  email: { type: String, required: true, trim: true, index: { unique: true, dropDups: true } },
  password: { type: String, required: true, trim: true },
  role: { type: String, required: true, trim: true },
}, {
  timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' }
});

userSchema.methods.validPassword = function(password) {
  const bcrypt = require('bcryptjs');
  return bcrypt.compareSync(password, this.password);
};

userSchema.virtual('products', {
  ref: 'Product',
  localField: '_id',
  foreignField: 'user_id',
});

userSchema.virtual('counters', {
  ref: 'Counter',
  localField: '_id',
  foreignField: 'user_id',
});

userSchema.virtual('admin').get(function() {
  return this.role === 'admin';
});

userSchema.pre('save', function(next) {
  if (this.isNew) {
    const bcrypt = require('bcryptjs');
    this.password = bcrypt.hashSync(this.password, 10);
  }

  next();
});

export { userSchema };

export default mongoose.model('User', userSchema);
