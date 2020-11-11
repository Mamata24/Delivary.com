const express = require('express')
const router = new express.Router()
const getOrders = require('../Controllers/getOrder')

router.get('/menu', getOrders.getOrder)
module.exports = router