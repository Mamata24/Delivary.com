const Restaurant = require('../Models/restaurant')

exports.getResataurantLoc = async (req, res) => {
    try {
        const restaurant = await Restaurant.find({})
        const requiredRestaurant = restaurant.filter(item => item.longitude > (req.body.longitude - 0.22523) && item.longitude < (req.body.longitude + 0.22523) && item.latitude > (req.body.latitude - 0.22523) && item.latitude < (req.body.latitude + 0.22523))
        // console.log(requiredRestaurant.length, req.body.longitude - 0.09009, ((req.body.longitude + 0.09009).toFixed(6)), (req.body.latitude - 0.09009), req.body.latitude + 0.09009)
        // restaurant.filter(item => console.log(item.longitude, item.latitude))
        res.send(requiredRestaurant)
    } catch (e) {
        res.status(500).send(e)
    }
}

// 10km - 0.09009
// 5km - 0.04505
// 20km - 0.18018
// 25km - 0.22523
