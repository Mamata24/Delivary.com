const Orders = require("../Models/orders");
exports.getOrder = async (req, res) => {
  try {
    // console.log("id", req.params.id);
    const order = await Orders.find({ user_id: req.params.id });
    res.send(order);
  } catch (e) {
    res.status(500).send(e);
  }
};
