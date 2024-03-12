
const express = require('express');
const router = express.Router();
const { registerUser, loginUser, verifyOTP, forgotPassword, resetPassword, resendOTP,  updatePersonalDetails,  getUserProfile, } = require('../controllers/userController');


const jwtMiddleware = require('../middleware/jwtMiddleware'); 


router.post('/register', registerUser);
router.post('/login', loginUser);
router.post('/verify-otp', verifyOTP);
router.post('/forgot-password', forgotPassword);
router.post('/reset-password', resetPassword); 
router.post('/resend-otp', resendOTP);
router.put('/update-personal-details', jwtMiddleware, updatePersonalDetails);
router.get('/user-profile', jwtMiddleware, getUserProfile);


module.exports = router;
