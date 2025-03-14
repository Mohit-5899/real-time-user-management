const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const auth = require('../middleware/auth');

// Update user location
// PUT /api/users/location
router.put('/location', auth, userController.updateLocation);

// Get all users with their locations
// GET /api/users
router.get('/', auth, userController.getAllUsers);

module.exports = router;