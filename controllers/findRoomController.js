// controllers/findRoomController.js
const FindRoom = require('../models/FindRoom');


exports.getAllFindRooms = async (req, res) => {
  try {
    const findRoom = await FindRoom.find({ adminApproved: { $ne: false } }).populate('userId');
    res.json({ findRoom });
  }  catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal server error' });
  }
};
// Create a new room search
exports.createFindRoom = async (req, res) => {
  try {
    const { userId } = req.user;
    const findRoom = await FindRoom.create({ ...req.body, userId });
    res.status(201).json({ findRoom });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get all room searches by user 
exports.getFindRooms = async (req, res) => {
  try {
    const { userId } = req.user;
    const findRooms = await FindRoom.find({ userId });
    res.json({ findRooms });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get a room search by ID
exports.getFindRoomById = async (req, res) => {
  try {
    const { userId } = req.user;
    const findRoom = await FindRoom.findOne({ _id: req.params.id, userId });
    if (!findRoom) {
      return res.status(404).json({ error: 'Room search not found' });
    }
    res.json({ findRoom });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update a room search by ID
exports.updateFindRoomById = async (req, res) => {
  try {
    const { userId } = req.user;
    const findRoom = await FindRoom.findOneAndUpdate(
      { _id: req.params.id, userId },
      req.body,
      { new: true }
    );
    if (!findRoom) {
      return res.status(404).json({ error: 'Room search not found' });
    }
    res.json({ findRoom });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Delete a room search by ID
exports.deleteFindRoomById = async (req, res) => {
  try {
    const { userId } = req.user;
    const findRoom = await FindRoom.findOneAndDelete({ _id: req.params.id, userId });
    if (!findRoom) {
      return res.status(404).json({ error: 'Room search not found' });
    }
    res.json({ message: 'Room search deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};



