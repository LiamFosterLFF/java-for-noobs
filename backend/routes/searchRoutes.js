const express = require('express');
const router = express.Router();

const { getSearchResults } = require('../controllers/searchControllers')

router.get('/', getSearchResults)

module.exports = router;
