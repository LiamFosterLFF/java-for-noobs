const express = require('express');
const router = express.Router();
const cors = require('cors');
const { sendPaymentData } = require('../controllers/paymentControllers');

router.route('/').post(cors, sendPaymentData);

module.exports = router;