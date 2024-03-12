// routes/findRoomRoutes.js
const express = require('express');
const router = express.Router();
const findRoomController = require('../controllers/findRoomController');
const jwtMiddleware = require('../middleware/jwtMiddleware');

// Create a new room search
router.post('/', jwtMiddleware, findRoomController.createFindRoom);

// Get all room searches
router.get('/', jwtMiddleware, findRoomController.getFindRooms);

// Get a room search by ID
router.get('/:id', jwtMiddleware, findRoomController.getFindRoomById);

// Update a room search by ID
router.put('/:id', jwtMiddleware, findRoomController.updateFindRoomById);

// Delete a room search by ID
router.delete('/:id', jwtMiddleware, findRoomController.deleteFindRoomById);

module.exports = router;
