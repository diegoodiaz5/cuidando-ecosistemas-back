const express = require('express')
const router = express.Router();

const { newPlant } = require('../Controllers/Plants')

// POST
router.post('/newPlant', newPlant);

module.exports = router