const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  role: { type: String, default: 'student', enum: ['student', 'staff', 'admin'] },
  orderHistory: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Order' }],
  feedback: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Feedback' }],
}, { timestamps: true });

module.exports = mongoose.model('User', UserSchema);
