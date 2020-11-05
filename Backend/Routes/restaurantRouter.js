const express = require('express')
const router = new express.Router()
const Restaurant = require('../Models/restaurant')
const getRestaurants = require('../Controllers/getRestaurant')

router.get('/Restaurants', getRestaurants.getRestaurant)
module.exports = router