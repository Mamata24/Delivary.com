const User = require("../Models/user");
exports.addUser = async (req, res) => {
  const user = new User(req.body);
  console.log(user);
  try {
    await user.save();
    res.status(201).send({ user });
  } catch (e) {
    res.status(400).send(e);
  }
};
