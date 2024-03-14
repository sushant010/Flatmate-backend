const mongoose = require('mongoose');

const verificationFlatSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }, // Add user ID field
  name: { type: String, required: true },
  mobile: { type: String, required: true },
  email: { type: String, required: true },
  aadhaarImage: { type: String, required: true },
  Service: { type: String, required: true },
  // Add more fields as needed
}, { timestamps: true });

module.exports = mongoose.model('VerificationFlat', verificationFlatSchema);
