const express = require('express')
const router = express.Router();

const { userlist, newUser, loginUser, userById } = require('../Controllers/Users')

// GET
router.get('/', userlist);
router.get('/userId/:uid', userById)

// POST
router.post('/register', newUser);
router.post('/login', loginUser)

module.exports = router