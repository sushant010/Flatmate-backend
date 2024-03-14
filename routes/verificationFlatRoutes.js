const express = require('express');
const router = express.Router();
const verificationFlatController = require('../controllers/verificationFlatController');
const jwtMiddleware = require('../middleware/jwtMiddleware');

router.post('/', jwtMiddleware, verificationFlatController.createVerificationFlat);
router.get('/:id', jwtMiddleware, verificationFlatController.getVerificationFlatById);
router.put('/:id', jwtMiddleware, verificationFlatController.updateVerificationFlatById);
router.delete('/:id', jwtMiddleware, verificationFlatController.deleteVerificationFlatById);

module.exports = router;
