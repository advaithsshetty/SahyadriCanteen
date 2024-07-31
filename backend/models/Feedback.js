const mongoose = require('mongoose');

const FeedbackSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  menuItemId: { type: mongoose.Schema.Types.ObjectId, ref: 'MenuItem', required: true },
  rating: { type: Number, required: true, min: 1, max: 5 },
  comment: { type: String },
  response: { type: String },
}, { timestamps: true });

module.exports = mongoose.model('Feedback', FeedbackSchema);
