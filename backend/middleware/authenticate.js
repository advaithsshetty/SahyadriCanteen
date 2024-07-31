// middleware/authenticate.js
const jwt = require('jsonwebtoken');
const User = require('../models/User'); // Adjust the path to your User model

const authenticate = async (req, res, next) => {
    const token = req.header('Authorization')?.replace('Bearer ', '');
    if (!token) {
        return res.status(401).json({ message: 'No token provided' });
    }

    try {
        const decoded = jwt.verify(token, process.env.SECRET); // Use your secret key
        const user = await User.findById(decoded.userId); // Adjust to match your schema
        if (!user) {
            throw new Error();
        }
        req.user = user; // Set the authenticated user to req.user
        next();
    } catch (error) {
        res.status(401).json({ message: 'Unauthorized' });
    }
};

module.exports = authenticate;
