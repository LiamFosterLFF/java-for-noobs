const express = require('express');
const router = express.Router();
const { getPrivateData } = require('../controllers/privateControllers');
const { protect } = require('../middleware/authMiddleware');

router.route('/').get(protect, getPrivateData);

module.exports = router;