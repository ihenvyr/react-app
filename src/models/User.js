import mongoose from 'mongoose';

export const schema = new mongoose.Schema(
  {
    email: { type: String, required: true, trim: true, index: { unique: true, dropDups: true } },
    password: { type: String, required: true, trim: true },
    role: { type: String, required: true, trim: true }
  },
  {
    // timestamp: true,
    timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' }
  }
);

schema.methods.validPassword = function(password) {
  const bcrypt = require('bcryptjs');
  return bcrypt.compareSync(password, this.password);
};

schema.virtual('admin').get(function() {
  return this.role === 'admin';
});

schema.pre('save', function(next) {
  if (this.isNew) {
    const bcrypt = require('bcryptjs');
    this.password = bcrypt.hashSync(this.password, 10);
  }

  next();
});

export default mongoose.model('User', schema);
