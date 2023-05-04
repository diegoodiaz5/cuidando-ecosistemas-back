const express = require('express')
const router = express.Router();

const { newPlant, myPlants } = require('../Controllers/Plants')

// GET
router.get("/myPlants", myPlants);

// POST
router.post('/newPlant', newPlant);

module.exports = router