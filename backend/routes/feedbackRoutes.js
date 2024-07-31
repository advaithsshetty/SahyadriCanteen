const express = require('express');
const router = express.Router();
const feedbackController = require('../controllers/feedbackController');
const authenticate = require('../middleware/authenticate'); // Middleware for authentication

// Submit feedback
router.post('/submit', authenticate, feedbackController.submitFeedback);

// Get all feedback (admin only)
router.get('/', authenticate, feedbackController.getAllFeedback);

// Get feedback for a specific menu item
router.get('/menu/:menuItemId', authenticate, feedbackController.getFeedbackForMenuItem);

// Respond to feedback (admin only)
router.post('/respond/:id', authenticate, feedbackController.respondToFeedback);

module.exports = router;
