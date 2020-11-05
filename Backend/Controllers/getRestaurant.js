const Restaurant = require('../Models/restaurant')
exports.getRestaurant = async (req, res) => {
    try {
        const restaurant = await Restaurant.find({})
        res.send(restaurant)
    } catch (e) {
        res.status(500).send(e)
    }
}

exports.getRestaurant