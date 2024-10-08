/// models/User.js
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  mobileNumber: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  otp: {
    type: String,
    default: null,
  },
  isOTPVerified: {
    type: Boolean,
    default: false,
  },
  isAdmin: {
    type: Boolean,
    // default: false,
  },
  subscribed:{
    type: Boolean,
    default : true,
  },


  firstName: String,
  lastName: String,
  whoYouAre: String,
  gender: String,
  city: String,
  image: String,
  socialMedia: String,
  aadhaar: String,
  pan: String,
  age:String,

});

const User = mongoose.model('User', userSchema);

module.exports = User;
