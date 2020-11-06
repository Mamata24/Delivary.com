const Restaurant = require('../Models/restaurant')
exports.getRestaurant = async (req, res) => {
    const page = Number.parseInt(req.query.page);
    const limit = Number.parseInt(req.query.limit);

    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;

    const results = {};
    results.totalCount = await Restaurant.countDocuments().exec();

    if (endIndex < results.totalCount) {
        results.next = {
            page: page + 1,
            limit: limit
        };
    }

    if (startIndex > 0) {
        results.prev = {
            page: page - 1,
            limit: limit
        };
    }
    try {
        // results.current = await Restaurant.find().limit(limit).skip(startIndex).exec()
        const restaurant = await Restaurant.find({})
        console.log(restaurant.length)
        const requiredRestaurant = restaurant.filter(item => item.longitude > (req.body.longitude - 0.22523) && item.longitude < (req.body.longitude + 0.22523) && item.latitude > (req.body.latitude - 0.22523) && item.latitude < (req.body.latitude + 0.22523))
        console.log(requiredRestaurant.length)
        const w = requiredRestaurant.limit(limit).skip(startIndex).exec()
        console.log(w.length)
        res.send(results)
    } catch (e) {
        res.status(500).send(e)
    }
}

exports.getRestaurant