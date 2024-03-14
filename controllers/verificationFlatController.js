const VerificationFlat = require('../models/verificationFlatSchema');

// Create Verification Flat
exports.createVerificationFlat = async (req, res) => {
  try {
    const userId = req.user.userId;
    req.body.userId = userId;
    const verificationFlat = await VerificationFlat.create(req.body);
    res.status(201).json({ success: true, verificationFlat });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
};

// Get Verification Flat by ID
exports.getVerificationFlatById = async (req, res) => {
  try {
    const userId = req.user.userId;
    const verificationFlat = await VerificationFlat.findOne({ _id: req.params.id, userId });
    if (!verificationFlat) {
      return res.status(404).json({ success: false, error: 'Verification Flat not found' });
    }
    res.json({ success: true, verificationFlat });
  } catch (error) {
    res.status(500).json({ success: false, error: 'Internal server error' });
  }
};

// Update Verification Flat by ID
exports.updateVerificationFlatById = async (req, res) => {
  try {
    const userId = req.user.userId;
    const verificationFlat = await VerificationFlat.findOneAndUpdate(
      { _id: req.params.id, userId },
      req.body,
      { new: true }
    );
    if (!verificationFlat) {
      return res.status(404).json({ success: false, error: 'Verification Flat not found' });
    }
    res.json({ success: true, verificationFlat });
  } catch (error) {
    res.status(500).json({ success: false, error: 'Internal server error' });
  }
};

// Delete Verification Flat by ID
exports.deleteVerificationFlatById = async (req, res) => {
  try {
    const userId = req.user.userId;
    const verificationFlat = await VerificationFlat.findOneAndDelete({ _id: req.params.id, userId });
    if (!verificationFlat) {
      return res.status(404).json({ success: false, error: 'Verification Flat not found' });
    }
    res.json({ success: true, message: 'Verification Flat deleted successfully' });
  } catch (error) {
    res.status(500).json({ success: false, error: 'Internal server error' });
  }
};
