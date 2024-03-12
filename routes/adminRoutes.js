const express = require('express');
const router = express.Router();
const adminController = require('../controllers/adminController');
const jwtMiddleware = require('../middleware/jwtMiddleware');
const adminMiddleware = require('../middleware/adminMiddleware');

router.get('/users', jwtMiddleware, adminMiddleware, adminController.getAllUsers);
router.get('/users/:userId', jwtMiddleware, adminMiddleware, adminController.getUserById);
router.put('/users/:userId', jwtMiddleware, adminMiddleware, adminController.updateUserById);

module.exports = router;
