const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  item: { type: String, required: true },
  date: { type: Date, required: true },
  status: { type: String, required: true },
}, { timestamps: true });

module.exports = mongoose.model('Order', OrderSchema);
