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




const FlatRequest = require('../models/verificationFlatSchema');

exports.getAllFlatRequests = async (req, res) => {
  try {
    const flatRequests = await FlatRequest.find();
    res.json({ flatRequests });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

exports.getFlatRequestById = async (req, res) => {
  try {
    const flatRequest = await FlatRequest.findById(req.params.id);
    if (!flatRequest) {
      return res.status(404).json({ error: 'Flat request not found' });
    }
    res.json({ flatRequest });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

exports.updateFlatRequestById = async (req, res) => {
  try {
    const flatRequest = await FlatRequest.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!flatRequest) {
      return res.status(404).json({ error: 'Flat request not found' });
    }
    res.json({ flatRequest });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

exports.deleteFlatRequestById = async (req, res) => {
  try {
    const flatRequest = await FlatRequest.findByIdAndDelete(req.params.id);
    if (!flatRequest) {
      return res.status(404).json({ error: 'Flat request not found' });
    }
    res.json({ message: 'Flat request deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

exports.getFlatRequestsByUserId = async (req, res) => {
  try {
    const userId = req.params.userId;
    const flatRequests = await FlatRequest.find({ userId: userId });
    res.json({ flatRequests });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
};



const Roommate = require('../models/Roommate');

exports.getAllRoommateRequests = async (req, res) => {
  try {
    const roommateRequests = await Roommate.find({});
    res.json({ roommateRequests });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

exports.getRoommateRequestById = async (req, res) => {
  try {
    const roomId = req.params.roomId;
    const roommateRequest = await Roommate.findById(roomId);
    if (!roommateRequest) {
      return res.status(404).json({ error: 'Roommate Request not found' });
    }
    res.json({ roommateRequest });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

exports.updateRoommateRequestById = async (req, res) => {
  try {
    const roomId = req.params.roomId;
    const updateData = req.body;
    const updatedRoommateRequest = await Roommate.findByIdAndUpdate(roomId, updateData, { new: true });
    if (!updatedRoommateRequest) {
      return res.status(404).json({ error: 'Roommate Request not found' });
    }
    res.json({ updatedRoommateRequest });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

exports.deleteRoommateRequestById = async (req, res) => {
  try {
    const roomId = req.params.roomId;
    const deletedRoommateRequest = await Roommate.findByIdAndDelete(roomId);
    if (!deletedRoommateRequest) {
      return res.status(404).json({ error: 'Roommate Request not found' });
    }
    res.json({ message: 'Roommate Request deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
};


exports.getRoommateRequestsByUserId = async (req, res) => {
  try {
    const userId = req.params.userId;
    const roommateRequests = await Roommate.find({ userId });
    res.json({ roommateRequests });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

const RoomRequest = require('../models/FindRoom');

 

exports.getRoomRequestById = async (req, res) => {
  try {
    const requestId = req.params.requestId;
    const roomRequest = await RoomRequest.findById(requestId);
    if (!roomRequest) {
      return res.status(404).json({ error: 'Room request not found' });
    }
    res.json({ roomRequest });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

exports.deleteRoomRequestById = async (req, res) => {
  try {
    const requestId = req.params.requestId;
    const deletedRoomRequest = await RoomRequest.findByIdAndDelete(requestId);
    if (!deletedRoomRequest) {
      return res.status(404).json({ error: 'Room request not found' });
    }
    res.json({ message: 'Room request deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

exports.updateRoomRequestById = async (req, res) => {
  try {
    const requestId = req.params.requestId;
    const requestDataToUpdate = req.body;
    const updatedRoomRequest = await RoomRequest.findByIdAndUpdate(requestId, requestDataToUpdate, { new: true });
    if (!updatedRoomRequest) {
      return res.status(404).json({ error: 'Room request not found' });
    }
    res.json({ updatedRoomRequest });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

exports.getRoomRequestsByUserId = async (req, res) => {
  try {
    const userId = req.params.userId;
    const roomRequests = await RoomRequest.find({ userId });
    res.json({ roomRequests });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
};
