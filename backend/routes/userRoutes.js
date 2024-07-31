const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const authenticate = require('../middleware/authenticate'); // Middleware for authentication
const User = require('../models/User');

// Register a new user
router.post('/register', userController.registerUser);

// Login a user
router.post('/login', userController.loginUser);

// Get user profile (authenticated users only)
router.get('/profile', authenticate, userController.getUserProfile);

// Get all users (admin only)
router.get('/', authenticate, userController.getAllUsers);

// Update user details (admin only)
router.put('/update', authenticate, userController.updateUser);

// Delete a user (admin only)
router.delete('/:id', authenticate, userController.deleteUser);

// Get current user profile
router.get('/me', authenticate, userController.getMe); 

module.exports = router;
