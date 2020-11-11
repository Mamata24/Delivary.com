const Orders = require('../Models/orders')
exports.getOrder = async (req, res) => {
    try {
        const order = await Orders.findOne({ user_id: req.params.id })
        res.send(order)
    } catch (e) {
        res.status(500).send(e)
    }
}

