const express = require('express');
const router = express.Router();
const adminController = require('../controllers/adminController');
const jwtMiddleware = require('../middleware/jwtMiddleware');
const adminMiddleware = require('../middleware/adminMiddleware');

// User details
router.get('/users', jwtMiddleware, adminMiddleware, adminController.getAllUsers);
router.get('/users/:userId', jwtMiddleware, adminMiddleware, adminController.getUserById);
router.put('/users/:userId', jwtMiddleware, adminMiddleware, adminController.updateUserById);


// Flat Verfication
router.get('/flat-requests', jwtMiddleware, adminMiddleware, adminController.getAllFlatRequests);
router.get('/flat-requests/:id', jwtMiddleware, adminMiddleware, adminController.getFlatRequestById);
router.put('/flat-requests/:id', jwtMiddleware, adminMiddleware, adminController.updateFlatRequestById);
router.delete('/flat-requests/:id', jwtMiddleware, adminMiddleware, adminController.deleteFlatRequestById);
router.get('/flat-requests/user/:userId', jwtMiddleware, adminMiddleware, adminController.getFlatRequestsByUserId);

// Find-roomate request
router.get('/roommate-Requests', jwtMiddleware, adminMiddleware, adminController.getAllRoommateRequests);
router.get('/roommate-Requests/:roomId',jwtMiddleware,  adminMiddleware, adminController.getRoommateRequestById);
router.put('/roommate-Requests/:roomId',jwtMiddleware,  adminMiddleware, adminController.updateRoommateRequestById);
router.delete('/roommate-Requests/:roomId',jwtMiddleware,  adminMiddleware, adminController.deleteRoommateRequestById);
router.get('/roommate-Requests/user/:userId',jwtMiddleware, adminMiddleware, adminController.getRoommateRequestsByUserId);

// room requests
router.get('/room-requests', jwtMiddleware, adminMiddleware, adminController.getAllRoomRequests);
router.get('/room-requests/:requestId', jwtMiddleware, adminMiddleware, adminController.getRoomRequestById);
router.delete('/room-requests/:requestId', jwtMiddleware, adminMiddleware, adminController.deleteRoomRequestById);
router.put('/room-requests/:requestId', jwtMiddleware, adminMiddleware, adminController.updateRoomRequestById);
router.get('/room-requests/user/:userId', jwtMiddleware, adminMiddleware, adminController.getRoomRequestsByUserId);

module.exports = router;
