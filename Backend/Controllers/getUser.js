const User = require("../Models/user");
exports.getUser = async (req, res) => {
  try {
    console.log(User);
    const user = await User.findByCredentials(
      req.body.email,
      req.body.password
    );
    // console.log(user)
    res.send({ user });
  } catch (e) {
    res.status(400).send();
  }
};
