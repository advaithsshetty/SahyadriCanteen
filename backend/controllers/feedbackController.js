const Feedback = require('../models/Feedback');
const MenuItem = require('../models/MenuItem');
const User = require('../models/User');

const submitFeedback = async (req, res) => {
  try {
    const { menuItemId, rating, comment } = req.body;
    
    if (!req.user.userId) {
      return res.status(401).json({ message: 'User not authenticated' });
    }
    
    const feedback = new Feedback({
      userId: req.user.userId,
      menuItemId,
      rating,
      comment,
    });
    
    await feedback.save();
    res.status(201).json(feedback);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

// Get all feedback (admin only)
const getAllFeedback = async (req, res) => {
  try {
    if (req.user.role !== 'admin') {
      return res.status(403).json({ message: 'Access denied' });
    }
    const feedbacks = await Feedback.find().populate('userId').populate('menuItemId');
    res.json(feedbacks);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

// Get feedback for a specific menu item
const getFeedbackForMenuItem = async (req, res) => {
  try {
    const { menuItemId } = req.params;
    const feedbacks = await Feedback.find({ menuItemId }).populate('userId');
    res.json(feedbacks);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

// Respond to feedback (admin only)
const respondToFeedback = async (req, res) => {
  try {
    if (req.user.role !== 'admin') {
      return res.status(403).json({ message: 'Access denied' });
    }
    const { id } = req.params;
    const { response } = req.body;
    const feedback = await Feedback.findByIdAndUpdate(id, { response }, { new: true });
    if (!feedback) {
      return res.status(404).json({ message: 'Feedback not found' });
    }
    res.json(feedback);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

module.exports = {
  submitFeedback,
  getAllFeedback,
  getFeedbackForMenuItem,
  respondToFeedback,
};
