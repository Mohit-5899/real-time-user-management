const User = require('../models/User');

// Update user location
exports.updateLocation = async (req, res) => {
  try {
    const { lat, lng } = req.body;
    
    if (!lat || !lng) {
      return res.status(400).json({ message: 'Latitude and longitude are required' });
    }

    const user = await User.findByPk(req.user.id);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    
    user.location = { lat, lng };
    user.lastActive = new Date();
    await user.save();

    const userData = user.toJSON();
    delete userData.password;
    res.json(userData);
  } catch (error) {
    console.error('Update location error:', error.message);
    res.status(500).send('Server error');
  }
};

// Get all users with their locations
exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.findAll({
      attributes: ['id', 'username', 'location', 'lastActive']
    });
    res.json(users);
  } catch (error) {
    console.error('Get users error:', error.message);
    res.status(500).send('Server error');
  }
};