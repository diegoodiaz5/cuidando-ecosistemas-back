const express = require('express')
const router = express.Router();

const { userlist, newUser, loginUser } = require('../Controllers/Users')

// GET
router.get('/', userlist);

// POST
router.post('/register', newUser);
router.post('/login', loginUser)

module.exports = router