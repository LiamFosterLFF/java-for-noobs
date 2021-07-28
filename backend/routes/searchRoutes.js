const express = require('express');
const router = express.Router();

const { getSearchResults, getSearchSuggestions } = require('../controllers/searchControllers')

router.get('/', getSearchResults)

router.get('/suggestions', getSearchSuggestions)

module.exports = router;
