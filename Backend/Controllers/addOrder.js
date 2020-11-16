const Order = require("../Models/orders");
exports.addOrder = (req, res) => {
  // const user = (await User.findOne({ email: req.body.email }))
  // console.log(user)
  const order = new Order(req.body.orders);
  // console.log(order);
  try {
    // console.log(order)
    order.save();
    res.status(201).send({ order });
  } catch (e) {
    res.status(400).send(e);
  }
};
