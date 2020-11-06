const Restaurant = require('../Models/restaurant')

function Paginator(items, page, per_page) {

    var page = page || 1,
        per_page = per_page || 5,
        offset = (page - 1) * per_page,

        paginatedItems = items.slice(offset).slice(0, per_page),
        total_pages = Math.ceil(items.length / per_page);
    return {
        page: page,
        per_page: per_page,
        pre_page: page - 1 ? page - 1 : null,
        next_page: (total_pages > page) ? page + 1 : null,
        total: items.length,
        total_pages: total_pages,
        data: paginatedItems
    };
}



exports.getRestaurant = async (req, res) => {
    // const page = Number.parseInt(req.query.page);
    // const limit = Number.parseInt(req.query.limit);

    // const startIndex = (page - 1) * limit;
    // const endIndex = page * limit;

    // const results = {};
    // results.totalCount = await Restaurant.countDocuments().exec();

    // if (endIndex < results.totalCount) {
    //     results.next = {
    //         page: page + 1,
    //         limit: limit
    //     };
    // }

    // if (startIndex > 0) {
    //     results.prev = {
    //         page: page - 1,
    //         limit: limit
    //     };
    // }
    try {
        // results.current = await Restaurant.find().limit(limit).skip(startIndex).exec()
        const restaurant = await Restaurant.find({})
        // console.log(restaurant.length)
        const requiredRestaurant = restaurant.filter(item => item.longitude > (req.body.longitude - 0.22523) && item.longitude < (req.body.longitude + 0.22523) && item.latitude > (req.body.latitude - 0.22523) && item.latitude < (req.body.latitude + 0.22523))
        // console.log(requiredRestaurant.length)
        const resp = Paginator(requiredRestaurant, req.query.page, req.query.limit)
        // console.log(resp.length)
        res.send(resp)
    } catch (e) {
        res.status(500).send(e)
    }
}

exports.getRestaurant