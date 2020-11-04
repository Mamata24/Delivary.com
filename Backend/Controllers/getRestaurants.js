const Restaurant = require('../Models/user')
exports.getRestaurant = async (req, res) => {
    try {
        const restaurant = await Restaurant.find({})
        res.send(restaurant)
    } catch (e) {
        res.status(500).send(e)
    }
}