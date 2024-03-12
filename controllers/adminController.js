// controllers/adminController.js
const User = require('../models/User');

exports.getAllUsers = async (req, res) => {
  try {
    const { userId, isAdmin } = req.user;

    if (!isAdmin) {
      return res.status(403).json({ error: 'Unauthorized: Only admin can access this endpoint' });
    }

    const allUsers = await User.find({}, '-password -otp -isOTPVerified');
    res.json({ allUsers });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal server error' });
  }
};

exports.getUserById = async (req, res) => {
  try {
    const { userId, isAdmin } = req.user;

    if (!isAdmin) {
      return res.status(403).json({ error: 'Unauthorized: Only admin can access this endpoint' });
    }

    const userIdToRetrieve = req.params.userId;
    const user = await User.findById(userIdToRetrieve, '-password -otp -isOTPVerified');

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    res.json({ user });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal server error' });
  }
};

exports.updateUserById = async (req, res) => {
  try {
    const { userId, isAdmin } = req.user;

    if (!isAdmin) {
      return res.status(403).json({ error: 'Unauthorized: Only admin can access this endpoint' });
    }

    const userIdToUpdate = req.params.userId;
    const userDataToUpdate = req.body;

    const updatedUser = await User.findByIdAndUpdate(userIdToUpdate, userDataToUpdate, { new: true });

    if (!updatedUser) {
      return res.status(404).json({ error: 'User not found' });
    }

    // Remove sensitive information before sending the response
    const { password, otp, isOTPVerified, ...sanitizedUser } = updatedUser.toObject();

    res.json({ user: sanitizedUser });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal server error' });
  }
};
