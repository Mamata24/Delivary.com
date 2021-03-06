const express = require('express')
const router = new express.Router()
const addUsers = require('../Controllers/addUser')
const getUsers = require('../Controllers/getUser')

router.post('/signup', addUsers.addUser)
router.post('/login', getUsers.getUser)
module.exports = router