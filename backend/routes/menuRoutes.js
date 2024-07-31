const express = require('express');
const router = express.Router();
const MenuItem = require('../models/MenuItem');
const authenticate = require('../middleware/authenticate'); // Middleware for authentication
const menuController = require('../controllers/menuController');

// Get all menu items
router.get('/', menuController.getAllMenuItems);

// Get all categories
router.get('/categories', menuController.getCategories);

// Get all menu items by category
router.get('/featured', menuController.getFeatured);
// Add a new menu item (admin only)

router.post('/', authenticate, menuController.addMenuItem);

// Edit a menu item (admin only)
router.put('/:id', authenticate, menuController.editMenuItem);

// Delete a menu item (admin only)
router.delete('/:id', authenticate, menuController.deleteMenuItem);  

module.exports = router;
