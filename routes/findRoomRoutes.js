// routes/findRoomRoutes.js
const express = require('express');
const router = express.Router();
const findRoomController = require('../controllers/findRoomController');
const jwtMiddleware = require('../middleware/jwtMiddleware');

router.get('/find-room/all', jwtMiddleware, findRoomController.getAllFindRooms);

// Create a new room search
router.post('/find-room', jwtMiddleware, findRoomController.createFindRoom);

// Get all room searches by user
router.get('/find-room', jwtMiddleware, findRoomController.getFindRooms);

// Get a room search by ID
router.get('/find-room/:id', jwtMiddleware, findRoomController.getFindRoomById);

// Update a room search by ID
router.put('/find-room/:id', jwtMiddleware, findRoomController.updateFindRoomById);

// Delete a room search by ID
router.delete('/find-room/:id', jwtMiddleware, findRoomController.deleteFindRoomById);


module.exports = router;
