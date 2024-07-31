const express = require('express');
const router = express.Router();
const Order = require('../models/Order');
const authenticate = require('../middleware/authenticate'); // Middleware for authentication
const orderController = require('../controllers/orderController');

// Place a new order
router.post('/place', authenticate, orderController.placeOrder);

// Get all orders (admin only)
router.get('/', authenticate, orderController.getAllOrders);

// Get a single order by ID
router.get('/:id', authenticate, orderController.getOrderById);

// Get order history
router.get('/history', authenticate, orderController.getHistory);

// Update order status (admin only)
router.put('/status/:id', authenticate, orderController.updateOrderStatus);

module.exports = router;