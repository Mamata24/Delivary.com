const express = require('express')
const router = new express.Router()
const getRestaurants = require('../Controllers/getRestaurant')
// const getRestaurantsLoc = require('../Controllers/getRestaurantLoc')

router.post('/Restaurants', getRestaurants.getRestaurant)
// router.post('/RestaurantsLoc', getRestaurantsLoc.getResataurantLoc)
module.exports = router