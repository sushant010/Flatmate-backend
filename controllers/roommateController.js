const Roommate = require('../models/Roommate');

// Create a new roommate entry
exports.createRoommate = async (req, res) => {
  try {
    const { userId } = req.user; // Get user ID from JWT token
    const roommateData = { ...req.body, userId };
    const roommate = await Roommate.create(roommateData);
    res.status(201).json({ roommate });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Get all roommate entries for a specific user
exports.getRoommatesByUserId = async (req, res) => {
  try {
    const { userId } = req.user; // Get user ID from JWT token
    const roommates = await Roommate.find({ userId });
    res.json({ roommates });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Update a roommate entry by ID
exports.updateRoommateById = async (req, res) => {
  try {
    const { userId } = req.user; // Get user ID from JWT token
    const { id } = req.params;
    const roommate = await Roommate.findOneAndUpdate(
      { _id: id, userId },
      req.body,
      { new: true }
    );
    if (!roommate) {
      return res.status(404).json({ error: 'Roommate not found' });
    }
    res.json({ roommate });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Delete a roommate entry by ID
exports.deleteRoommateById = async (req, res) => {
  try {
    const { userId } = req.user; // Get user ID from JWT token
    const { id } = req.params;
    const roommate = await Roommate.findOneAndDelete({ _id: id, userId });
    if (!roommate) {
      return res.status(404).json({ error: 'Roommate not found' });
    }
    res.json({ message: 'Roommate deleted successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal server error' });
  }
};

exports.getAllRoommates = async (req, res) => {
  try {
    const roommates = await Roommate.find().populate('userId');
    res.json({ roommates });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal server error' });
  }
};


