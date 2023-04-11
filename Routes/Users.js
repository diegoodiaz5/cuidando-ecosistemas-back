const express = require('express')
const router = express.Router();

const { userlist, newUser } = require('../Controllers/Users')

// GET
router.get('/', userlist);

// POST
router.post('/newUser', newUser);

module.exports = router