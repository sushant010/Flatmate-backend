// models/findRoomSchema.js
const mongoose = require('mongoose');

const findRoomSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  location: {
    type: String,
    required: true
  },
  lookingFor: {
    type: String,
    required: true
  },
  rent: {
    type: Number,
    required: true
  },
  occupancy: {
    type: String,
    enum: ['Single', 'Shared', 'Any'],
    required: true
  },
  highlights: [String],
  companyOrCollege: String,
  interestedInPgh: Boolean,
  makingTeamInterest: Boolean,
  visible: {
    type: String,
    enum: ['public', 'private'],
    default: 'public'
  },
  description: String
}, { timestamps: true });

const FindRoom = mongoose.model('FindRoom', findRoomSchema);

module.exports = FindRoom;
