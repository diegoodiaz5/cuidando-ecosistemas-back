const express = require('express')
const router = express.Router();

const { newPlant, myPlants } = require('../Controllers/Plants')

// POST
router.post('/newPlant', newPlant);
router.post("/myPlants", myPlants);

module.exports = router