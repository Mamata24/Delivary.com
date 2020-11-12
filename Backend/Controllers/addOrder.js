const Order = require("../Models/orders");
exports.addOrder = async (req, res) => {
    // const user = (await User.findOne({ email: req.body.email }))
    // console.log(user)
    const order = new Order(req.body.orders);
    try {

        // console.log(order)
        await order.save();
        res.status(201).send({ order });
    } catch (e) {
        res.status(400).send(e);
    }
};
