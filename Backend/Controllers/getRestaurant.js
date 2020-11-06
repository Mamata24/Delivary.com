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
        results.current = await Restaurant.find().limit(limit).skip(startIndex).exec()
        res.send(results)
    } catch (e) {
        res.status(500).send(e)
    }
}

exports.getRestaurant