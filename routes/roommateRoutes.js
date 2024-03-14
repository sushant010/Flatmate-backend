const express = require('express');
const router = express.Router();
const roommateController = require('../controllers/roommateController');
const jwtMiddleware = require('../middleware/jwtMiddleware');

router.post('/find-roommate', jwtMiddleware, roommateController.createRoommate);
router.get('/find-roommate', jwtMiddleware, roommateController.getRoommatesByUserId);
router.put('/find-roommate/:id', jwtMiddleware, roommateController.updateRoommateById);
router.delete('/find-roommate/:id', jwtMiddleware, roommateController.deleteRoommateById);
router.get('/find-roommate/all', jwtMiddleware, roommateController.getAllRoommates);

module.exports = router;
