const mongoose = require('mongoose');

const roommateSchema = new mongoose.Schema({
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
    default: 'Any'
  },
  photos: {
    type: [String],
    required: true
  },
  highlights: {
    type: [String],
    required: true
  },
  mobileVisibility: {
    type: String,
    enum: ['Public', 'Private'],
    default: 'Public'
  },
  amenities: {
    type: [String],
    required: true
  },
  description: {
    type: String,
    required: true
  }
}, { timestamps: true });

module.exports = mongoose.model('Roommate', roommateSchema);
