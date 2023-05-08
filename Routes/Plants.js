const express = require('express')
const router = express.Router();

const { newPlant, myPlants, allPlants } = require('../Controllers/Plants')

// GET
router.get("/allPlants", allPlants)

// POST
router.post('/newPlant', newPlant);
router.post("/myPlants", myPlants);

module.exports = router